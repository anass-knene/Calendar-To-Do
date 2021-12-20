import React, { useContext } from "react";
import { MyContext } from "../Context/Context";
import "./Profile.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Profile() {
  const { user, setLoading, imageSelected, setImageSelected } =
    useContext(MyContext);
  const uploadImage = async (e) => {
    const files = e.target.files;
    const formData = new FormData();
    console.log(formData);
    formData.append("file", files[0]);
    formData.append("upload_preset", "images");
    setLoading(true);
    console.log(files[0]);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dzd6nt514/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const file = await res.json();
    setImageSelected(file.secure_url);
    setLoading(false);
  };

  return (
    <div className="ProfileDiv">
      <h1>welcome {user?.userName} </h1>
      {!imageSelected ? (
        <FontAwesomeIcon icon={faUser} size="6x" />
      ) : (
        <img src={imageSelected} alt="img" width="150px" />
      )}

      <h1>Change Profile Picture</h1>
      <input
        type="file"
        name="file"
        placeholder="Upload an image"
        onChange={uploadImage}
      />
    </div>
  );
}
