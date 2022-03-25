import React, { useState, useEffect } from "react";
import axiosInstance from "../../services/api";
import Papa from "papaparse";
import helper from "../../services/helper";
import { object } from "yup/lib/locale";
import { useAppContext } from "../../Context/AppContext";
import config from "../../config.json";
const UploadModal = ({
  fetchEmployee,
  settoggleModal,
  setuploading,
  setUploadSuccess,
}) => {
  const { combineRequest, showAlert } = useAppContext();
  const [buttonRef, setbuttonRef] = useState(React.createRef());
  const [loading, setloading] = useState(false);
  const [uploadState, setuploadState] = useState("Upload New Employees");
  const [fileName, setfileName] = useState("");
  const [invalid, setinvalid] = useState(false);
  const [data, setData] = useState([]);
  const [path, setpath] = useState("/employees/bulk-upload");
  const updateState = (path, msg) => {
    setpath(path);
    setuploadState(msg);
    setfileName("");
    setinvalid(false);
  };
  const onFileUpload = (e) => {
    const files = e.target.files;

    if (files) {
      setfileName(files[0]?.name);
      Papa.parse(files[0], {
        complete: function (results) {
          const jsonData = helper.arrayToJSONObject(results.data);

          if (
            Object.values(jsonData[jsonData.length - 1]).includes(undefined)
          ) {
            setData(jsonData.slice(0, jsonData.length - 1));
            // setinvalid(true)
          } else {
            setinvalid(false);
            setData(jsonData);
          }
        },
      });
    }
  };
  useEffect(() => {}, [uploadState]);

  const uploadData = () => {
    setuploading(true);
    setloading(true);

    axiosInstance({
      method: path === "/leave-application/update-leavecount" ? "PUT" : "POST",
      baseURL: config.ApiUrl + path,
      data: data,
    })
      .then((res) => {
        showAlert(true, "Data successfully uploaded", "alert alert-success");
        settoggleModal(false);
        setuploading(false);
        setloading(false);
        buttonRef.click();
        fetchEmployee();
      })
      .catch((err) => {
        console.log(err);
        showAlert(false, "Error uploading data", "alert alert-success");
        setloading(false);
        buttonRef.click();
        settoggleModal(false);
      });
  };
  return (
    <div
      className="modal fade show"
      id="uploadModal"
      tabIndex="-1"
      aria-labelledby="FormModalModalLabel"
      style={{ display: "block" }}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              {uploadState}
            </h5>
            <button
              ref={(input) => setbuttonRef(input)}
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-4">
                <div
                  className="nav flex-column nav-pills mt-3"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <a
                    onClick={() =>
                      updateState(
                        "/employees/bulk-upload",
                        "Upload New employees"
                      )
                    }
                    className="nav-link active mb-3"
                    id="v-pills-home-tab"
                    data-toggle="pill"
                    href="#v-pills-home"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    New User
                  </a>
                  <a
                    onClick={() =>
                      updateState(
                        "/EmergencyContact/bulk-upload",
                        "Upload Emergency Contact"
                      )
                    }
                    className="nav-link mb-3"
                    id="v-pills-profile-tab"
                    data-toggle="pill"
                    href="#v-pills-home"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    Emergency Contacts
                  </a>
                  <a
                    onClick={() =>
                      updateState(
                        "/ContactDetails/bulk-upload",
                        "Upload Contact Details"
                      )
                    }
                    className="nav-link mb-3"
                    id="v-pills-messages-tab"
                    data-toggle="pill"
                    href="#v-pills-home"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                  >
                    Contact Details
                  </a>
                  <a
                    onClick={() =>
                      updateState(
                        "/PersonalDetails/bulk-upload",
                        "Upload Personal Details"
                      )
                    }
                    className="nav-link mb-3"
                    id="v-pills-personal-tab"
                    data-toggle="pill"
                    href="#v-pills-home"
                    role="tab"
                    aria-controls="v-pills-personal"
                    aria-selected="false"
                  >
                    Personal Details
                  </a>
                  <a
                    onClick={() =>
                      updateState(
                        "/SalaryDetails/bulk-upload",
                        "Upload Salary Details"
                      )
                    }
                    className="nav-link mb-3"
                    id="v-pills-settings-tab"
                    data-toggle="pill"
                    href="#v-pills-home"
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                  >
                    Salary Details
                  </a>
                  <a
                    onClick={() =>
                      updateState(
                        "/leave-application/update-leavecount",
                        "Upload Leave"
                      )
                    }
                    className="nav-link mb-3"
                    id="v-pills-settings-tab"
                    data-toggle="pill"
                    href="#v-pills-home"
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                  >
                    Employee Leave
                  </a>
                </div>
              </div>
              <div className="col-8">
                <div className="tab-content" id="v-pills-tabContent">
                  <label
                    className="tab-pane fade upload-csv show active"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <input
                      type="file"
                      style={{ display: "none" }}
                      accept=".csv,.xlsx,.xls"
                      onChange={(e) => onFileUpload(e)}
                    />
                    <i
                      style={{ fontSize: "20px" }}
                      className="fa fa-cloud-upload pr-4"
                    ></i>
                    Click to {uploadState}
                    <p className="pt-3">{fileName}</p>
                    {invalid ? (
                      <small className="pt-3 text-danger">
                        This file contains invalid fields
                      </small>
                    ) : null}
                  </label>
                  {/* <label className="tab-pane fade upload-csv" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
          Emergency Contact
      </label>
      <label className="tab-pane fade upload-csv" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
          Contact Details
      </label>
      <label className="tab-pane fade upload-csv" id="v-pills-personal" role="tabpanel" aria-labelledby="v-pills-personal-tab">
          Personal Details
      </label>
      <label className="tab-pane fade upload-csv" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
          Salary Details
      </label> */}
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>

            <button
              onClick={() => uploadData()}
              type="button"
              className="btn btn-primary"
            >
              {loading ? (
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              ) : (
                "Upload"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
