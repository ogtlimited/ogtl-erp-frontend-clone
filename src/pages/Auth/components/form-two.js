import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "../../../config.json";
import tokenService from "../../../services/token.service";

import { useForm, Controller } from "react-hook-form";

const FormTwo = ({ previous, formData }) => {
  const [shifts, setShifts] = useState([]);
  const [roles, setRoles] = useState([]);
  const [errorMsg, seterrorMsg] = useState("");

  const [departments, setDepartments] = useState([]);
  const [designations, setDesignations] = useState([]);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });
  const isEmpty = Object.keys(errors).length === 0;

  useEffect(() => {
    axios
      .get(`${config.ApiUrl}/employee-register`)
      .then((res) => {
        const { departments, designations, shifts, roles } =
          res.data.employeeRegisterationData;
        const departmentS = departments?.map((e) => {
          return {
            label: e.department,
            value: e._id,
          };
        });
        setDepartments(departmentS);
        const designationOpts = designations?.map((e) => {
          return {
            label: e.designation,
            value: e._id,
          };
        });
        setDesignations(designationOpts);
        const shiftsOpts = shifts?.map((e) => {
          return {
            label: e.shift_name,
            value: e._id,
          };
        });
        setShifts(shiftsOpts);
        const roleOpts = roles?.map((e) => {
          return {
            label: e.title,
            value: e._id,
          };
        });
        setRoles(roleOpts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSubmit = (data) => {
    let date_of_joining = new Date().toISOString();

    let newData = {
      ...formData,
      ...data,
      department: data?.department?.value,
      designation: data?.designation?.value,
      default_shift: data?.default_shift?.value,
      role: data?.role?.value,
      isAdmin: true,
      status: "active",
      date_of_joining,
    };

    setLoading(true);

    axios
      .post(config.ApiUrl + "/api/signup", newData)
      .then((res) => {
        tokenService.setUser(res.data.findUser);

        tokenService.setToken(res.data.token.token);
        window.location.href = "/dashboard/employee-dashboard";
      })
      .catch((err) => {
        console.log(err);
        seterrorMsg(err?.response?.data?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="main-wrapper">
      <div className="account-content">
        <div className="container">
          <div className="account-logo"></div>
          <div className="account-box">
            <div className="account-wrapper">
              <h3 className="account-title">Register</h3>
              <p className="account-subtitle">Access to our dashboard</p>
              <h6 className="text-center">
                <small className="account-subtitle text-center error">
                  {errorMsg}
                </small>
              </h6>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label htmlFor="department">Department </label>
                  <Controller
                    name="department"
                    control={control}
                    render={({ field }) => (
                      <Select {...field} options={departments} />
                    )}
                  />
                  {errors.department &&
                    errors.department.type === "required" && (
                      <span className="error">Department is required</span>
                    )}
                </div>
                <div className="form-group">
                  <label htmlFor="designation">Designation </label>
                  <Controller
                    name="designation"
                    control={control}
                    render={({ field }) => (
                      <Select {...field} options={designations} />
                    )}
                  />
                  {errors.designation &&
                    errors.designation.type === "required" && (
                      <span className="error">Designation is required</span>
                    )}
                </div>
                <div className="form-group">
                  <label htmlFor="role">Role </label>
                  <Controller
                    name="role"
                    control={control}
                    render={({ field }) => (
                      <Select {...field} options={roles} />
                    )}
                  />
                  {errors.role && errors.role.type === "required" && (
                    <span className="error">Role is required</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="default_shift">shift </label>
                  <Controller
                    name="default_shift"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={shifts}
                        menuPortalTarget={document.body}
                        styles={{
                          menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                        }}
                      />
                    )}
                  />
                  {errors.default_shift &&
                    errors.default_shift.type === "required" && (
                      <span className="error">Shift is required</span>
                    )}
                </div>

                <div className="form-group mt-2">
                  <div className="row">
                    <div className="col">
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    {...register("password", { required: true })}
                    className="form-control"
                  />
                  {errors.password && errors.password.type === "required" && (
                    <span className="error">Password is required</span>
                  )}
                </div>
                <div className="form-group d-flex justify-content-between">
                  <button
                    className="btn btn-primary "
                    type="button"
                    onClick={previous}
                  >
                    Previous
                  </button>
                  <button
                    className={`btn btn-primary ${!isEmpty && "disabled"}`}
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    ) : (
                      "Register"
                    )}
                  </button>
                </div>
              </form>
              <div className="form-group d-flex justify-content-between ">
                <span className="text-muted">Already have an account?</span>
                <Link to="/auth/login">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormTwo;
