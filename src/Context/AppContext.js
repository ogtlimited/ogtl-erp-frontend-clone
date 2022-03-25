import React, { createContext, useEffect, useRef, useState } from "react";
import { createBrowserHistory } from "history";
import axiosInstance from "../services/api";
import tokenService from "../services/token.service";
import config from "../config.json";
import socketIOClient from "socket.io-client";

export default createBrowserHistory();
const baseURL = config.ApiUrl;
const AppContext = createContext();

const AppProvider = (props) => {
  const [allEmployees, setallEmployees] = useState([]);
  const [showProgress, setshowProgress] = useState(false);
  const [userToken, setuserToken] = useState(null);
  const [loggedIn, setloggedIn] = useState(false);
  const [formUpdate, setformUpdate] = useState(null);
  const [showAlertMsg, setshowAlertMsg] = useState({
    state: false,
    msg: "",
    class: "",
  });
  const [employeeAttendance, setemployeeAttendance] = useState([]);
  const [user, setuser] = useState(tokenService.getUser());
  const [isChecked, setIsChecked] = useState(true);
  const [notifications, setNotifications] = useState([]);
  let socket = useRef();

  // let socketRef;
  //Fetching notifications
  useEffect(() => {
    socket.current = socketIOClient("http://localhost:3000");
    socket.current.on("error", (error) => {
      console.log(error);
      // ...
    });

    socket.current.emit("notification", user?.company_email);
    socket.current.on("messages", (data) => {
      const newArr = data && data.map((e) => JSON.parse(e));
      if (newArr) {
        setNotifications((prev) => [...newArr, ...prev]);
      }
    });
    return () => socket.current.close();
  }, [user?.company_email]);

  useEffect(() => {}, [showAlertMsg]);

  const clearNotifications = () => {
    if (socket) {
      socket.current.emit("clear_notification", user?.company_email);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchEmployee();
      fetchEmployeeAttendance();
    }
  }, [userToken]);

  const fetchEmployee = () => {
    axiosInstance.get("/employees").then((e) => {
      setallEmployees(e?.data?.employees);
      setloggedIn(false);
    });
  };
  const showAlert = (state, msg, className) => {
    let icon = className?.includes("alert-success")
      ? "#check-circle-fill"
      : "#exclamation-triangle-fill";
    let label = className?.includes("alert-success") ? "Success:" : "Warning:";
    setshowAlertMsg({
      state: state,
      msg: msg,
      class: className,
      icon,
      label,
    });
    setTimeout(() => {
      setshowAlertMsg({
        state: "",
        msg: "",
        class: "",
        icon: "",
        label: "",
      });
    }, 5000);
  };
  const fetchTypesShift = () => {
    return axiosInstance.get("/api/shiftType");
  };

  const combineRequest = () => {
    return axiosInstance.get("/combine-employee-form");
  };

  //for creating employees
  const createEmployee = () => {
    return axiosInstance.get("/create-employee-form");
  };

  //for creating shifts
  const createShifts = () => {
    return axiosInstance.get("/create-shift-form");
  };

  //create payroll
  const createPayroll = () => {
    return axiosInstance.get("/create-payroll-form");
  };

  //creating recruitments
  const createRecruitmens = () => {
    return axiosInstance.get("/create-recruitment-form");
  };

  //for anything relating to performace
  const createPerfomance = () => {
    return axiosInstance.get("/create-performance-form");
  };

  //for anything relating to campaign
  const createCampaign = () => {
    return axiosInstance.get("/create-campaign-form");
  };
  //for anything relating to role assignment
  const createRoleAssignment = () => {
    return axiosInstance.get("/create-role-form");
  };

  const adminDashboardData = () => {
    return axiosInstance.get("/admin-dashboard");
  };
  const fetchEmployeeAttendance = () => {
    const date = new Date();
    const firstDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      1
    ).toLocaleDateString();
    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).toLocaleDateString();

    const params = `?startOfMonth=${firstDay}&endOfMonth=${lastDay}`;
    return axiosInstance
      .get("/api/attendance/employee/" + user?.ogid + params)
      .then((e) => {
        setemployeeAttendance(e?.data?.data);
      });
  };

  return (
    <AppContext.Provider
      value={{
        fetchTypesShift,
        showProgress,
        combineRequest,
        employeeAttendance,
        adminDashboardData,
        setallEmployees,
        allEmployees,
        showAlert,
        showAlertMsg,
        fetchEmployeeAttendance,
        fetchEmployee,
        setloggedIn,
        formUpdate,
        setformUpdate,
        isChecked,
        setIsChecked,
        notifications,
        user,
        clearNotifications,
        setuserToken,
        createEmployee,
        createShifts,
        createPayroll,
        createRecruitmens,
        createPerfomance,
        createCampaign,
        createRoleAssignment,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

function useAppContext() {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be within an AppProvider");
  }
  return context;
}

export { AppProvider, useAppContext };
