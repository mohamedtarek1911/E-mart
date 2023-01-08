import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addToCart,
  ClearCart,
  removeFromCart,
  removeItem,
} from "../../store/CartSlice";

export default function Cart() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let cart = useSelector((state) => state.cart);
  console.log(cart);
  let goto = () => {
    navigate("/home");
  };

  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.qty;
    return acc;
  }, 0);
  return (
    <>
      {cart.length === 0 ? (
        <div className="text-center cart__title py-5 my-5">
          <h2 className="text-black ">Cart Is Empty</h2>
          <div className="btn">
            <button
              onClick={goto}
              className="btn btn-primary m-auto text-center"
            >
              Go to shopping
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      {cart.length > 0 ? (
        <div className="container head__table py-5 my-5">
          <div className="head">
            <h3>Total Price:{totalPrice.toFixed(2)}$</h3>
            <button
              onClick={() => dispatch(ClearCart())}
              className="btn btn-danger"
            >
              Clear Products
            </button>
          </div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">image</th>
                <th scope="col">QTY</th>
                <th scope="col">remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{product.title}</td>
                    <td>{product.price} $</td>
                    <td>
                      <img
                        className="w-100 cart__image"
                        src={product.image}
                        alt={index}
                      />
                    </td>
                    <td className="text-center">
                      <div className="d-flex flex-grow justify-content-around align-content-center align-items-center">
                        <span
                          onClick={() => dispatch(addToCart(product))}
                          className="plus bg-info text-white fs-6 p-1 rounded"
                        >
                          +
                        </span>
                        {product.qty}
                        <span
                          onClick={() => dispatch(removeItem(product))}
                          className="minus bg-danger text-white fs-6 p-1 rounded"
                        >
                          -
                        </span>
                      </div>
                    </td>
                    <td>
                      <button
                        onClick={() => dispatch(removeFromCart(product))}
                        className="btn btn-danger"
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
