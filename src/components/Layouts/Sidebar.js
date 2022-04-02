import React from "react";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar-wrapper active">
      <div className="sidebar-header">
        <div className="d-flex justify-content-between">
          <div className="logo">
            <Link to="/">
              <img
                src="assets/images/logo/hyundai-motor-company-logo.svg"
                alt="Logo"
                width="200"
                height="200"
                srcSet
              />
            </Link>
          </div>
          <div className="toggler">
            <a href="#" className="sidebar-hide d-xl-none d-block">
              <i className="bi bi-x bi-middle" />
            </a>
          </div>
        </div>
      </div>
      <div className="sidebar-menu">
        <ul className="menu">
          <li className="sidebar-title">Menu</li>
          <li className="sidebar-item active ">
            <Link to="/" className="sidebar-link">
              <i className="bi bi-grid-fill" />
              <span>Dashboard</span>
            </Link>
          </li>
        </ul>
      </div>
      <button className="sidebar-toggler btn x">
        <i data-feather="x" />
      </button>
    </div>
  );
}
