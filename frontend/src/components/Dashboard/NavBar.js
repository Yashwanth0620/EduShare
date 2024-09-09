import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const NavBar = () => {
  const [toggle, setToggle] = useState(true);

  const toggleBar = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className={`total-nav ${toggle ? "inline-block" : "d-none"}`}>
        <div
          className="d-flex flex-column flex-shrink-0 p-3 h-100 text-light"
          style={{ width: "250px", backgroundColor: "#0e2238" }}
        >
          <Link
            to="/dashboard"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto  text-decoration-none text-light"
          >
            <img
              src={require("../../assets/white_logo_small.png")}
              className="bi mx-3"
              width="40"
              height="40"
              alt="Logo"
            />
            <span className="fs-4">EduShare</span>
          </Link>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li>
              <Link to="/dashboard" className="nav-link  text-light">
                <i
                  width="16"
                  height="16"
                  className="fa-solid fa-house bi me-2"
                ></i>
                Dashboard
              </Link>
            </li>
            <li className="nav-item dropdown">
              <div
                className="nav-link text-light dropdown-toggle "
                id="dropdownMenuButton"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i
                  className="fa-solid fa-users-line bi me-2"
                  width="16"
                  height="16"
                ></i>
                Groups
              </div>
              <ul
                className="dropdown-menu container-sm shadow"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <Link className="dropdown-item" to="/my-groups">
                    <i
                      className="fa-solid fa-user-group bi me-2"
                      width="16"
                      height="16"
                    ></i>
                    My Groups
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/join-group">
                    <i
                      className="fa-solid fa-user-group bi me-2"
                      width="16"
                      height="16"
                    ></i>
                    Join Group
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/new-group">
                    <i
                      className="fa-solid fa-plus bi me-2"
                      width="16"
                      height="16"
                    ></i>
                    Create
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/calander" className="nav-link text-light ">
                <i
                  className="fa-solid fa-calendar-days bi me-2"
                  width="16"
                  height="16"
                ></i>
                Calander
              </Link>
            </li>
            <li>
              <Link to="/messages" className="nav-link text-light ">
                <i
                  className="fa-solid fa-comment bi me-2"
                  width="16"
                  height="16"
                ></i>
                Messages
              </Link>
            </li>
          </ul>
          <hr />
          <Link className="dropdown text-light">
            <div
              className="d-flex text-light align-items-center text-decoration-none dropdown-toggle"
              id="dropdownUser2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.webp?s=2048x2048&w=is&k=20&c=wMTCZdfcnfH8GFWojm54r2NRaHuoQZyv7JxrdQmchkc="
                alt=""
                width="32"
                height="32"
                className="rounded-circle me-2"
              />
              <strong>Username</strong>
            </div>
            <ul
              className="dropdown-menu text-small shadow"
              aria-labelledby="dropdownUser2"
            >
              <li>
                <Link className="dropdown-item" to="/settings">
                  <i
                    className="fa-solid fa-gear bi me-2"
                    width="16"
                    height="16"
                  ></i>
                  Settings
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/profile">
                  <i
                    className="fa-solid fa-user bi me-2"
                    width="16"
                    height="16"
                  ></i>
                  Profile
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item link-danger" to="/">
                  Sign out
                </Link>
              </li>
            </ul>
          </Link>
        </div>
      </div>
      <div className={`small-nav`}>
        <div className="icon btn btn-light" onClick={toggleBar}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </>
  );
};

export default NavBar;
