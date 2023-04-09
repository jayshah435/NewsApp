import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../Routers";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        NewsAppFunc
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {routes.map((route) => {
            return (
              <li className="nav-item">
                <Link className="nav-link flex" to={route.path}>
                  {route.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
