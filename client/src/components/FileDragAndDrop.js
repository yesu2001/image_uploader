import React, { useEffect, useState } from "react";
import "../App.css";
import image from "./images/image.svg";
import { useDropzone } from "react-dropzone";

function FileDragAndDrop({ handleChange }) {
  const [yourImage, setYourImage] = useState([]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setYourImage(
        acceptedFiles.map((uploadedfile) =>
          Object.assign(uploadedfile, {
            preview: URL.createObjectURL(uploadedfile),
          })
        )
      );
    },
  });

  if (yourImage) {
    handleChange(yourImage);
  } else {
    console.log("no image droped");
  }

  return (
    <div className="FilesDragAndDrop">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? <p>Drop files here</p> : <img src={image} alt="" />}
      </div>
    </div>
  );
}

export default FileDragAndDrop;
