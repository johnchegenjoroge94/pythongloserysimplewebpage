import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function UpdateProduct() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    loadProducts();
  }, []);

  // load product by its id and show data to forms by value

  let loadProducts = async () => {
    const result = await axios.get(`http://127.0.0.1:8000/${id}`);
    // console.log(result.data.name);

    setImage(result.data.image);
    setName(result.data.name);
    setPrice(result.data.price);
    setDescription(result.data.description);
  };

  // Update a single product by id

  const updateSingleProduct = async () => {
    let formField = new FormData();

    formField.append("name", name);
    formField.append("price", price);
    formField.append("description", description);

    if (image !== null) {
      formField.append("image", image);
    }

    await axios({
      method: "PUT",
      url: `http://127.0.0.1:8000/${id}/`,
      data: formField,
    }).then((response) => {
      //   console.log(response.data);
      navigate("/");
    });
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Update A Product</h2>

        <div className="form-group">
          <img src={image} height="100" width="200" alt="" srcSet="" />

          <input
            accept="image/png, image/gif, image/jpeg"
            type="file"
            className="form-control"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your E-mail Address"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your Phone Number"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button
          onClick={updateSingleProduct}
          className="btn btn-primary btn-block"
        >
          Update Product
        </button>
      </div>
    </div>
  );
}
