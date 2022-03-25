import React from "react";
import $ from "jquery";

const ApproveModal = ({ title, selectedRow, approveFunction }) => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {title}
              </h5>
            </div>
            <div className="modal-body">Are you sure you want to approve?</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => {
                  approveFunction(selectedRow);
                  $("#exampleModal").modal("toggle");
                }}
              >
                Approve
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApproveModal;
