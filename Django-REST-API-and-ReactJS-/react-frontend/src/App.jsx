import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ShowProducts from "./components/ShowProducts";
import AddProducts from "./components/AddProducts";
import NavBar from "./components/NavBar";
import ProductDetails from "./components/ProductDetails";
import UpdateProduct from "./components/UpdateProduct";

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar>
          <Routes>
            <Route path="/products" element={<ShowProducts />} />
            <Route path="/addproducts" element={<AddProducts />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="products/:id/update" element={<UpdateProduct />} />
          </Routes>
        </NavBar>
      </BrowserRouter>
    </>
  );
}

export default App;
