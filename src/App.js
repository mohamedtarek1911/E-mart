import React from "react";
import Cart from "./Components/Cart/Cart";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Header from "./Components/Header/Header";

export default function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "cart", element: <Cart /> },
        { path: "products", element: <Products /> },
        { path: "*", element: <Home /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}>
        <Layout />
      </RouterProvider>
      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}
{
  /* <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/category/:id" element={<Category />} />
    <Route path="/cart" element={<Cart />} />
  </Routes>
  <Footer />
</BrowserRouter> */
}
