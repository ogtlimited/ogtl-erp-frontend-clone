import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../services/api";
import tokenService from "../../services/token.service";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";
import config from "../../config.json";
import { useAppContext } from "../../Context/AppContext";
import { callMsGraph } from "../../graph";

const Login = () => {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);
  let navigate = useNavigate();
  const [errorMsg, seterrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setLoading(true);
    instance
      .loginPopup(loginRequest)
      .then((e) => {
        
        console.log(e);
        const obj = {
          company_email: data.company_email.trim(),
        };

        // localStorage.setItem("microsoftAccount", JSON.stringify(e.account));
        // localStorage.setItem(
        //   "microsoftAccessToken",
        //   JSON.stringify(e.accessToken)
        // );

        axios
          .post(config.ApiUrl + "/api/login", obj)
          .then((res) => {
            tokenService.setUser(res.data.employee);
            // fetchEmployee()
            // fetchEmployeeAttendance()
            tokenService.setToken(res.data.token.token);
            // setuserToken(res.data.token.token)
            // navigate("/dashboard/employee-dashboard");
            window.location.href = "/dashboard/employee-dashboard";
          })
          .catch((err) => {
            console.log(err);
            seterrorMsg(
              "Unable to login either username or password is incorrect"
            );
            // setInterval(() => {
            //     seterrorMsg('')
            // }, 5000);
          })
          .finally(() => {
            setLoading(false);
          });
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="main-wrapper">
      <div className="account-content">
        <div className="container">
          <div className="account-logo">
            <Link to="/">
              <img
                className="logo"
                src="/static/media/outsource.2499b5b3.png"
                alt="Outsource Global Technologies"
              />
            </Link>
          </div>
          <div className="account-box">
            <div className="account-wrapper">
              <h3 className="account-title">Login</h3>
              <p className="account-subtitle">Access to our dashboard</p>
              <h6 className="text-center">
                <small className="account-subtitle text-center error">
                  {errorMsg}
                </small>
              </h6>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label htmlFor="company_email">Email </label>
                  <input
                    type="text"
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
                {/* <div className="form-group mt-2">
                  <div className="row">
                    <div className="col">
                      <label htmlFor="password">Password</label>
                    </div>
                    <div className="col-auto">
                      <a className="text-muted" href="/">
                        Forgot password?
                      </a>
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
                </div> */}
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
                      "Login"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
