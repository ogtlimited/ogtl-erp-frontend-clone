import React, { useState } from "react";
import logo from "../../assets/img/OG-Logo.png";
import Signature from "./signature";
import "./signature.css";
import tokenService from "../../services/token.service";
const getIcon = (name) => <i className={"las " + name}></i>;

const SignatureGenerator = () => {
  const [user, setuser] = useState(tokenService.getUser());

  const initialState = {
    fullName: user.first_name + " " + user.last_name || "",
    position: user.designation.designation || "",
    email: user.company_email || "",
    phone: "",
    copied: false,
  };
  const [state, setState] = useState(initialState);

  const handleChange = (event) => {
    if (event.target.name === "withPhoto") {
      setState((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.checked,
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }));
    }
  };
  const enoughData = () => {
    let progress = 100;
    if (state.withPhoto) {
      if (state.fullName && state.position && state.email) {
        return (
          <React.Fragment>
            <Signature
              fullName={state.fullName}
              position={state.position}
              email={state.email}
              phone={state.phone}
            />
            <br />
            <button
              className="btn btn-primary"
              onClick={copyToClipboard}
              endIcon={state.copied ? getIcon("la-check") : getIcon("la-copy")}
            >
              {state.copied ? "Copied" : "Copy to clipboard"}
            </button>
          </React.Fragment>
        );
      } else {
        Object.entries(state).forEach(([key, value]) => {
          if (["fullName", "position", "email"].includes(key)) {
            if (value.length === 0) {
              progress = progress - 20;
            }
          }
        });
      }
    } else {
      if (state.fullName && state.position && state.email) {
        return (
          <React.Fragment>
            <Signature
              fullName={state.fullName}
              position={state.position}
              email={state.email}
              phone={state.phone}
            />
            <br />
            <button className="btn btn-primary" onClick={copyToClipboard}>
              {state.copied ? "Copied" : "Copy to clipboard"}{" "}
              {state.copied ? getIcon("la-check") : getIcon("la-copy")}
            </button>
          </React.Fragment>
        );
      } else {
        Object.entries(state).forEach(([key, value]) => {
          if (["fullName", "phone", "position", "email"].includes(key)) {
            if (value.length === 0) {
              progress = progress - 25;
            }
          }
        });
      }
    }
    if (progress > 0) {
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            {/* <span className="visually-hidden">Loading...</span> */}
          </div>
        </div>
      );
    } else {
      return <div>Please, input your data</div>;
    }
  };
  const copyToClipboard = () => {
    let copyText = document.querySelector(".signature");
    const range = document.createRange();
    if (copyText) {
      range.selectNode(copyText);
    }
    const windowSelection = window.getSelection();
    if (windowSelection) {
      windowSelection.removeAllRanges();
      windowSelection.addRange(range);
    }
    try {
      let successful = document.execCommand("copy");

      setState((prevState) => ({
        ...prevState,
        copied: true,
      }));
    } catch (err) {
      console.log("Fail");
    }
  };
  const isStateChanged = () => {
    return JSON.stringify(state) === JSON.stringify(initialState);
  };

  const clearState = () => {
    setState(initialState);
  };

  return (
    <>
      <div className="page-header">
        <div className="row align-items-center">
          <div className="col">
            <h3 className="page-title">Email Signature</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Email Signature</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-5 d-flex gfuSqG">
          <div className="flex-fill">
            <div className="card-body">
              <form action="#">
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">Full Name</label>
                  <div className="col-lg-9">
                    <input
                      type="text"
                      value={state.fullName}
                      name={"fullName"}
                      onChange={handleChange}
                      autoFocus={true}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">Designation</label>
                  <div className="col-lg-9">
                    <input
                      type="text"
                      label="Position"
                      value={state.position}
                      name={"position"}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">
                    Email Address
                  </label>
                  <div className="col-lg-9">
                    <input
                      type="email"
                      value={state.email}
                      name={"email"}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">Phone</label>
                  <div className="col-lg-9">
                    <input
                      type="text"
                      value={state.phone}
                      name={"phone"}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="text-right">
                  {/* <button type="submit" className="btn btn-primary">Submit</button> */}
                  <button
                    disabled={isStateChanged()}
                    onClick={clearState}
                    className="btn btn-primary"
                  >
                    Clear
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-xl-7 d-flex ">
          <div className="gfuSqG flex-fill">
            <div className="card-body">{enoughData()}</div>
          </div>
        </div>
      </div>
      {/* custom generator */}
      {/* <img style={{width: '50px'}} src={logo} alt={"logo"}/> */}
    </>
  );
};

export default SignatureGenerator;
