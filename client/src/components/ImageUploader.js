import React from "react";
import FileDragAndDrop from "./FileDragAndDrop";

const ImageUploader = ({ handleChange }) => {
  return (
    <div className="upload_section">
      <h2>Upload your image</h2>
      <p style={{ color: "#828282" }}>file should be Jpeg, png...</p>
      <FileDragAndDrop handleChange={handleChange} />
      <p style={{ color: "#828282" }}>or</p>
      <label className="upload">
        <input
          name="Image"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={(e) => handleChange(e.target.files)}
        />
        Choose a file
      </label>
    </div>
  );
};

export default ImageUploader;
