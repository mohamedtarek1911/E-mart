import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Header() {
  let cart = useSelector((state) => state.cart);
  console.log(cart);
  let count = cart.reduce((acc, product) => {
    acc += product.qty;
    return acc;
  }, 0);
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <h3>E-mart</h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mb-2 ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item px-3    position-relative ">
                <Link className="nav-link" to="/cart">
                  <div className="cart">
                    <span className="px-1">
                      cart <i className="fa-solid fa-cart-shopping px-1"></i>
                    </span>
                    <span className="badge badge-info p-2  bg-info position-absolute number ">
                      {count}
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
