import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "./Navbar.css";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <div className="navbar-link">
            <h1>
              <span style={{ color: "#ff4000" }}>
                  RentPeCar <i class="fas fa-car" />
              </span>
            </h1>
          </div>
          <ul class="nav col-12 col-lg-auto my-2 justify-content-right my-md-0 text-large">
               <li className="px-3 nav-item header-user js-nav-user-dropdown dropdown show">
                <Link
                  id="loginbtn"
                  style={{ visibility: "visible", position: "absolute" }}
                  className="btn btn-outline-light"
                  to="/signin"
                >
                  <span>
                    Login <i class="fas fa-sign-in-alt"></i>
                  </span>
                </Link>
                <DropdownButton
                  title={<div>"username" <span><i class="fas fa-user"></i></span></div>}
                  id="dropdown-basic-button"
                  style={{ visibility: "hide", position: "relative" }}
                >
                  <Dropdown.Item>
                    <Link className="btn btn-outline-dark me-3" to="/update_profile">
                      Update Profile <i class="fas fa-user-edit"></i>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <button className="btn btn-outline-dark me-3" >
                      Logout <i class="fas fa-sign-out-alt"></i>
                    </button>
                  </Dropdown.Item>
                </DropdownButton>
              </li>
              <li></li>
            </ul>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
