import React, { useEffect, useState } from "react";
import { Formik, ErrorMessage, Field, getIn } from "formik";
import axiosInstance from "../../services/api";
import { useAppContext } from "../../Context/AppContext";
const initialValues = {
  account: {
    read: false,
    create: false,
    update: false,
    delete: false,
  },
  projects: {
    read: false,
    create: false,
    update: false,
    delete: false,
  },
  facility: {
    read: false,
    create: false,
    update: false,
    delete: false,
  },
  hr: {
    read: false,
    create: false,
    update: false,
    delete: false,
  },
  it: {
    read: false,
    create: false,
    update: false,
    delete: false,
  },
  title: "",
};
const PermissionForm = ({ role, fetchRole }) => {
  const { showAlert } = useAppContext();
  const [defaultValues, setDefaultValues] = useState(initialValues);
  useEffect(() => {
    if (role !== undefined && role && Object.keys(role).length > 0) {
      setDefaultValues(role);
    }
  }, [defaultValues, role]);

  return (
    <>
      <div className="col-sm-8 col-md-8 col-lg-8 col-xl-9">
        <h6 className="card-title m-b-20">
          Module Access {role && "For " + role.title}
        </h6>
        <div className="table-responsive">
          <Formik
            initialValues={defaultValues}
            enableReinitialize
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                axiosInstance
                  .put(`/api/role/${role._id}`, values)
                  .then((res) => {
                    // setupdated(true)
                    fetchRole();
                    showAlert(true, res.data?.message, "alert alert-success");
                  })
                  .catch((error) => {
                    console.log(error);
                    showAlert(
                      true,
                      error?.response?.data?.message,
                      "alert alert-danger"
                    );
                  });
                setSubmitting(false);
              }, 500);
            }}
          >
            {(props) => {
              const {
                values,
                touched,
                errors,
                dirty,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
                handleReset,
              } = props;
              return (
                <form className="card px-4 pt-4" onSubmit={handleSubmit}>
                  <table className="table table-striped custom-table card-body">
                    <thead>
                      <tr>
                        <th>Module Permission</th>
                        <th className="text-center">Read</th>
                        <th className="text-center">Create</th>
                        <th className="text-center">Update</th>
                        <th className="text-center">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Accounts</td>
                        <td className="text-center">
                          <Field name="account.read" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <Field name="account.create" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <Field name="account.update" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <Field name="account.delete" type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>Campaign / Project</td>
                        <td className="text-center">
                          <Field name="projects.read" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <Field name="projects.create" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <Field name="projects.update" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <Field name="projects.delete" type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>Facility</td>
                        <td className="text-center">
                          <Field name="facility.read" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <Field name="facility.create" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <Field name="facility.update" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <Field name="facility.delete" type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>HR</td>
                        <td className="text-center">
                          <Field name="hr.read" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <Field name="hr.create" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <Field name="hr.update" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <Field name="hr.delete" type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>IT</td>
                        <td className="text-center">
                          <Field name="it.read" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <Field name="it.create" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <Field name="it.update" type="checkbox" />
                        </td>
                        <td className="text-center">
                          <Field name="it.delete" type="checkbox" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <button type="submit" className="btn btn-primary mb-3">
                    {isSubmitting ? (
                      <div
                        className="spinner-border spinner-border-sm"
                        role="status"
                      ></div>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default PermissionForm;
