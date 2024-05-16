import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { stars } from "../images";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/orders",
      name: "Orders",
      icon: <MdShoppingCart />,
    },
    {
      path: "/my-partners",
      name: "Partners",
      icon: <FaUserAlt />,
    },
    {
      path: "/messages",
      name: "Messages",
      icon: <FaMessage />,
    }
  ];
  return (
    <div className="side">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
        <div className="row pt-5 px-2" style={{ display: isOpen ? "block" : "none" }}>
        <div className="col-md-12">
          <div className="card card-img border-0 bg-transparent">
            <div className="card-header border-0">
              <img src={stars} alt="" className="img-fluid top-logo" width={90} />
            </div>
            <div className="card-body p-0 w-100 mt-5 px-1">
              <p className="text-white m-0 fs-16">Upgrade to Meetings</p>
              <p className="text-grey fs-16">Get unlimit functions upgrading to business no</p>
            </div>
            <div className="card-footer py-0 pb-1 border-0 px-1">
              <button type="button" className="custbtn">Upgrade</button>
            </div>
          </div>
        </div>
      </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
