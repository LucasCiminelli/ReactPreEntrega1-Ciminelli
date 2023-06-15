import React from "react";
import { Cart } from "./CartWidget";

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/index.html">
            My <span className="logo-nav">Store</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cart">
                  <Cart /> <span>1</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
