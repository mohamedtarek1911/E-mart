import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/CartSlice";
import { getProducts } from "../../store/ProductsSlice";
import Loading from "../Loading/Loading";
export default function Products() {
  let products = useSelector((state) => {
    return state.products;
  });
  let dispatch = useDispatch();

  console.log(products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      {products.length > 0 ? (
        products.map((product, index) => {
          return (
            <div key={index} className="col-md-4 my-5 py-5">
              <div className="text-center my-3 py-3">
                <img
                  height="350"
                  className="w-100"
                  src={product.image}
                  alt={product.id}
                />
                <div className="itemTitle">
                  <h5> {product.title.split(" ").slice(0, 4).join(" ")}</h5>
                  <h4>
                    price:${product.price}{" "}
                    <span className="px-2">rate:{product.rating.rate}</span>
                  </h4>
                </div>
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className="btn btn-primary w-100"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div className="m-auto text-center loading py-5 my-5 d-flex justify-content-center align-content-center">
          <Loading />
        </div>
      )}
    </>
  );
}
