import axios from "axios";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import tokenService from "../../services/token.service";

import Select from "react-select";

import config from "../../config.json";

const SignUp = () => {
  const [errorMsg, seterrorMsg] = useState("");
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
  const onSubmit = (data) => {
    let date_of_joining = new Date().toISOString();
    let newData = {
      ...data,
      gender: data?.gender?.value,
      isAdmin: true,
      status: "active",
      date_of_joining,
    };
    setLoading(true);

    axios
      .post(config.ApiUrl + "/api/signup", newData)
      .then((res) => {
        tokenService.setUser(res.data.createEmployeeData);

        tokenService.setToken(res.data.token.token);
        window.location.href = "/dashboard/employee-dashboard";
      })
      .catch((err) => {
        console.log(err);
        seterrorMsg("Unable to login either username or password is incorrect");
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
                  <label htmlFor="first_name">First Name </label>
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    {...register("first_name", { required: true })}
                    className="form-control"
                  />
                  {errors.first_name &&
                    errors.first_name.type === "required" && (
                      <span className="error">First Name is required</span>
                    )}
                </div>
                <div className="form-group">
                  <label htmlFor="middle_name">Middle Name </label>
                  <input
                    type="text"
                    name="middle_name"
                    id="middle_name"
                    {...register("middle_name", { required: true })}
                    className="form-control"
                  />
                  {errors.middle_name &&
                    errors.middle_name.type === "required" && (
                      <span className="error">Middle Name is required</span>
                    )}
                </div>
                <div className="form-group">
                  <label htmlFor="last_name">Last Name </label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    {...register("last_name", { required: true })}
                    className="form-control"
                  />
                  {errors.last_name && errors.last_name.type === "required" && (
                    <span className="error">Last Name is required</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="ogid">Employee ID </label>
                  <input
                    type="text"
                    name="ogid"
                    id="ogid"
                    {...register("ogid", { required: true })}
                    className="form-control"
                  />
                  {errors.ogid && errors.ogid.type === "required" && (
                    <span className="error">Employee ID is required</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender </label>
                  <Controller
                    name="gender"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={[
                          { value: "male", label: "Male" },
                          { value: "female", label: "Female" },
                        ]}
                      />
                    )}
                  />
                  {errors.gender && errors.gender.type === "required" && (
                    <span className="error">Gender is required</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="company_email">Email </label>
                  <input
                    type="email"
                    name="company_email"
                    id="company_email"
                    {...register("company_email", { required: true })}
                    className="form-control"
                  />
                  {errors.company_email &&
                    errors.company_email.type === "required" && (
                      <span className="error">Email is required</span>
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
                <div className="form-group text-center">
                  <button
                    className="btn btn-primary account-btn"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <span
                        className="spinner-border"
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

export default SignUp;
