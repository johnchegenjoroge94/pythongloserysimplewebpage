import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProducts() {
  const [image, setImage] = useState(null);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const AddProductInfo = async () => {
    let formField = new FormData();

    formField.append("name", name);
    formField.append("price", price);
    formField.append("description", description);

    if (image !== null) {
      formField.append("image", image);  
     }
    
      //    else {
    //   alert("Select an image before uploading");
    // }

    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/",
      data: formField,
    }).then((response) => {
      // console.log(response.data);
      navigate("/products");
    });
  };

  return (
    <>
      <p>Add Products</p>

      <input
        required
        type="text"
        className="form-control"
        placeholder="Product name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        required
        type="number"
        className="form-control"
        placeholder="Price"
        name="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <img src={image} alt="" />
      <input
        required
        accept="image/png, image/gif, image/jpeg"
        type="file"
        className="form-control"
        placeholder="Image"
        name="image"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <textarea
        required
        className="form-control"
        placeholder="Description"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <button className="btn btn-success" onClick={AddProductInfo}>
        Add Product
      </button>
    </>
  );
}
