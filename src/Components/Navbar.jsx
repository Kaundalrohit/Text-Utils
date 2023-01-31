import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      {/* <header className={`p-3`}>
        <div className="container">
          <div
            className={`d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start`}
          >
            <div className="d-flex align-items-center text-black mb-2 mb-lg-0 text-decoration-none h3">
              <div
                className={`nav-link px-2 text-${
                  props.mode === "dark" ? "light" : "dark"
                }`}
              >
                <img src="" alt="Text_Converter" />
              </div>
            </div>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 ms-5 justify-content-center mb-md-0">
              <li>
                <Link
                  to="/"
                  className={`nav-link px-2 text-${
                    props.mode === "dark" ? "light" : "dark"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`nav-link px-2 text-${
                    props.mode === "dark" ? "light" : "dark"
                  }`}
                >
                  About
                </Link>
              </li>
            </ul>

            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                onClick={props.changeMode}
              />
              <label
                className={`nav-link form-check-label px-2 text-${
                  props.mode === "dark" ? "light" : "dark"
                }`}
                htmlFor="flexSwitchCheckChecked"
              >
                {props.darkmode}
              </label>
            </div>
          </div>
        </div>
      </header> */}
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} text-${props.mode}`}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            style={{ color: props.mode === "light" ? "black" : "white" }}
          >
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link active`}
                  aria-current="page"
                  to="/"
                  style={{ color: props.mode === "light" ? "black" : "white" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/about"
                  style={{ color: props.mode === "light" ? "black" : "white" }}
                >
                  About
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                onClick={props.changeMode}
              />
              <label
                className={`nav-link form-check-label px-2 text-${
                  props.mode === "dark" ? "light" : "dark"
                }`}
                htmlFor="flexSwitchCheckChecked"
              >
                {props.darkmode}
              </label>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                style={{ color: props.mode === "light" ? "black" : "white" }}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
