import React from "react";
import Select from "react-select";
import { Link } from "react-router-dom";

import { useForm, Controller } from "react-hook-form";

const FormOne = ({ next, setFormData, formData }) => {
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

  const onSubmit = (data) => {
    setFormData({
      ...data,
      gender: data?.gender?.value,
    });
    next();
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

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label htmlFor="first_name">First Name </label>
                  <input
                    type="text"
                    name="first_name"
                    defaultValue={formData?.first_name || ""}
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
                    defaultValue={formData?.middle_name || ""}
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
                    defaultValue={formData?.last_name || ""}
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
                    defaultValue={formData?.ogid || ""}
                    id="ogid"
                    {...register("ogid", { required: true })}
                    className="form-control"
                  />
                  {errors.ogid && errors.ogid.type === "required" && (
                    <span className="error">Employee ID is required</span>
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
                <div className="form-group">
                  <label htmlFor="gender">Gender </label>
                  <Controller
                    name="gender"
                    control={control}
                    defaultValue={formData?.gender || ""}
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
                  <button
                    className={`btn btn-primary ${!isEmpty && "disabled"}`}
                    type="submit"
                  >
                    Next
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

export default FormOne;
