import React from "react";
import { Link, withRouter } from "react-router-dom";

import { isAuthenticated, signout } from "../auth/helper";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#ffffff" };
  }
};

const Menu = ({ history }) => (
  <div>
    <ul className="nav nav-tabs bg-dark">
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          <strong>Home</strong>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(history, "/cart")}
          className="nav-link"
          to="/cart"
        >
          <strong>Cart</strong>
        </Link>
      </li>
      {isAuthenticated() && isAuthenticated().user.role === 1 ? (
        <li className="nav-item">
          <Link
            style={currentTab(history, "/admin/dashboard")}
            className="nav-link"
            to="/admin/dashboard"
          >
            <strong>Dashboard</strong>
          </Link>
        </li>
      ) : (
        <li className="nav-item">
          <Link
            style={currentTab(history, "/user/dashboard")}
            className="nav-link"
            to="/user/dashboard"
          >
            <strong>Dashboard</strong>
          </Link>
        </li>
      )}
      {!isAuthenticated() && (
        <>
          <li className="nav-item">
            <Link
              style={currentTab(history, "/signup")}
              className="nav-link"
              to="/signup"
            >
              <strong>Signup</strong>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={currentTab(history, "/signin")}
              className="nav-link"
              to="/signin"
            >
              <strong>Signin</strong>
            </Link>
          </li>
        </>
      )}
      {isAuthenticated() && (
        <li className="nav-item">
          <span
            onClick={() => signout(() => history.push("/"))}
            className="nav-link text-warning"
          >
            <strong>Signout</strong>
          </span>
        </li>
      )}
    </ul>
  </div>
);

export default withRouter(Menu);
