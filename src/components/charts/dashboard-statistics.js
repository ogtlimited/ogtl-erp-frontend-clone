import React from "react";
import { Doughnut } from "react-chartjs-2";

const DashboardStatistics = ({stats, chartData, chartTitle}) => {
  const data = {
    labels: ["Profit", "Expenses"],
    datasets: [
      {
        label: "# of Votes",
        data: [120000, 190000],
        backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
     <div className="col-md-12 col-lg-6 col-xl-4 d-flex">
        <div className="card flex-fill">
          <div className="card-body">
            <h4 className="card-title">{chartTitle}</h4>
            <Doughnut data={chartData} />
            
          </div>
        </div>
      </div>
      <div className="col-md-12 col-lg-12 col-xl-4 d-flex">
        <div className="card flex-fill dash-statistics">
          <div className="card-body">
            <h5 className="card-title">Statistics</h5>
            <div className="stats-list">
              <div className="stats-info">
                <p>
                  Today Leave{" "}
                  <strong>
                    4 <small>/ 65</small>
                  </strong>
                </p>
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "31%" }}
                    aria-valuenow="31"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="stats-info">
                <p>
                  Pending Invoice{" "}
                  <strong>
                    15 <small>/ 92</small>
                  </strong>
                </p>
                <div className="progress">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "31%" }}
                    aria-valuenow="31"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="stats-info">
                <p>
                  Completed Projects{" "}
                  <strong>
                    85 <small>/ 112</small>
                  </strong>
                </p>
                <div className="progress">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    sstyle={{ width: "62%" }}
                    aria-valuenow="62"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="stats-info">
                <p>
                  Open Tickets{" "}
                  <strong>
                    190 <small>/ 212</small>
                  </strong>
                </p>
                <div className="progress">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "62%" }}
                    aria-valuenow="62"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="stats-info">
                <p>
                  Closed Tickets{" "}
                  <strong>
                    22 <small>/ 212</small>
                  </strong>
                </p>
                <div className="progress">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: "22%" }}
                    aria-valuenow="22"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 col-lg-6 col-xl-4 d-flex">
        <div className="card flex-fill">
          <div className="card-body">
            <h4 className="card-title">Task Statistics</h4>
            <div className="statistics">
              <div className="row">
                <div className="col-md-6 col-6 text-center">
                  <div className="stats-box mb-4">
                    <p>Total Tasks</p>
                    <h3>385</h3>
                  </div>
                </div>
                <div className="col-md-6 col-6 text-center">
                  <div className="stats-box mb-4">
                    <p>Overdue Tasks</p>
                    <h3>19</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="progress mb-4">
              <div
                className="progress-bar bg-purple"
                role="progressbar"
                style={{ width: "30%" }}
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                30%
              </div>
              <div
                className="progress-bar bg-warning"
                role="progressbar"
                style={{ width: "20%" }}
                aria-valuenow="18"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                22%
              </div>
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: "22%" }}
                aria-valuenow="12"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                24%
              </div>
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{ width: "24%" }}
                aria-valuenow="14"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                21%
              </div>
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: "24%" }}
                aria-valuenow="14"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                10%
              </div>
            </div>
            <div>
              <p>
                <i className="fa fa-dot-circle-o text-purple mr-2"></i>Completed
                Tasks <span className="float-right">166</span>
              </p>
              <p>
                <i className="fa fa-dot-circle-o text-warning mr-2"></i>
                Inprogress Tasks <span className="float-right">115</span>
              </p>
              <p>
                <i className="fa fa-dot-circle-o text-success mr-2"></i>On Hold
                Tasks <span className="float-right">31</span>
              </p>
              <p>
                <i className="fa fa-dot-circle-o text-danger mr-2"></i>Pending
                Tasks <span className="float-right">47</span>
              </p>
              <p className="mb-0">
                <i className="fa fa-dot-circle-o text-info mr-2"></i>Review
                Tasks <span className="float-right">5</span>
              </p>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default DashboardStatistics;
