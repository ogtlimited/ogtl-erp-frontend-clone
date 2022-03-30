import React, { useContext } from "react";
import logo from "../../assets/img/logo.png";
import cropped from "../../assets/img/cropped-white.png";
import { Link, useNavigate } from "react-router-dom";
import tokenService from "../../services/token.service";
import { NotificationBox } from "./NotificationBox";

const toggle_sidebar = (e) => {
  e.preventDefault();
  // alert('clicked')
  const body = document.getElementById("main-body");
  if (body.classList.value === "mini-sidebar") {
    body.classList.remove("mini-sidebar");
  } else {
    body.classList.add("mini-sidebar");
  }
};

const Header = () => {
  let navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    tokenService.clearStorage();
    navigate("/auth/login");
  };
  const user = tokenService.getUser();

  //   const { user } = useContext(AppContext);
  //   const imageUrl = "https://erp.outsourceglobal.com" + user?.profile_image;

  return (
    <div className="header">
      <div className="header-left">
        <div className="logo">
          <img src={logo} style={{ width: "100px" }} alt="" />
        </div>
        <div className="cropped-logo">{/* <img src={cropped} alt="" /> */}</div>
      </div>

      <a id="toggle_btn">
        <span className="bar-icon">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </a>

      <div className="page-title-box">
        <h3>Bluetag Group</h3>
      </div>

      <a id="mobile_btn" className="mobile_btn ml-4" href="#sidebar">
        <i className="fa fa-bars"></i>
      </a>

      <ul className="nav user-menu">
        <li className="nav-item">
          <div className="top-nav-search">
            <a className="responsive-search">
              <i className="fa fa-search"></i>
            </a>
            <form>
              <input
                className="form-control"
                type="text"
                placeholder="Search here"
              />
              <button className="btn" type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
        </li>

        <li className="nav-item dropdown">
          <NotificationBox />
        </li>

        <li className="nav-item dropdown has-arrow main-drop">
          <a
            href="#"
            className="dropdown-toggle nav-link"
            data-toggle="dropdown"
          >
            <span className="user-img">
              <img src="assets/img/profiles/avatar-21.jpg" alt="" />
              <span
                className="status online"
                style={{ bottom: 24, right: 3 }}
              ></span>
            </span>
            <span>{user?.first_name}</span>
          </a>
          <div className="dropdown-menu">
            <Link
              className="dropdown-item"
              to={`/dashboard/user/profile/${user?._id}`}
            >
              My Profile
            </Link>
            <Link className="dropdown-item" to="settings">
              Settings
            </Link>
            <a className="dropdown-item" onClick={(e) => logout(e)}>
              Logout
            </a>
          </div>
        </li>
      </ul>

      <div className="dropdown mobile-user-menu">
        <a
          href="#"
          className="nav-link dropdown-toggle"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fa fa-ellipsis-v"></i>
        </a>
        <div className="dropdown-menu dropdown-menu-right">
          <Link
            className="dropdown-item"
            to={`/dashboard/user/profile/${user?._id}`}
          >
            My Profile
          </Link>
          <Link className="dropdown-item" to="settings">
            Settings
          </Link>
          <a className="dropdown-item" onClick={(e) => logout(e)}>
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
