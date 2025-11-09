import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

export default function ShowProducts() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get("http://127.0.0.1:8000/");

    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <p>All Products</p>

      {products.map((product) => (
        <>
          <img src={product.image} alt="" width="150px" />

          <a href={"/products/" + product.id}>ddsd</a>
        </>
      ))}
    </>
  );
}
