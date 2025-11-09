import axios from "axios";
import { useState, useEffect } from "react";

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

      <div className="row">
        {products
          ? products.map((product) => {
              return (
                <>
                  <div className="col-md-3">
                    <div class="card">
                      <img
                        src={product.image}
                        class="card-img-top"
                        alt={product.name}
                      />
                      <div class="card-body">
                        <p class="card-text">Name:{product.name}</p>
                        <p class="card-text">
                          Description:{product.description}
                        </p>
                        <p class="card-text">Price:{product.price}</p>
                        <a href={"products/" + product.id}>View details</a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          : null}
      </div>
    </>
  );
}
