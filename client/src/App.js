import { useEffect, useState } from "react";
import Processing from "./components/Processing";
import "./App.css";
import axios from "axios";
import Phase3 from "./components/Phase3";
import ImageUploader from "./components/ImageUploader";

function App() {
  const [newData, setNewData] = useState("");
  const [currentUi, setCurrentUi] = useState("upload");

  const handleChange = (files) => {
    if (files) {
      setCurrentUi("processing");
      onUpload(files);
    } else {
      setCurrentUi("upload");
    }
  };

  const onUpload = async (files) => {
    const imageFile = files[0];
    const formData = new FormData();
    formData.append("image", imageFile);
    try {
      await axios
        .post("http://localhost:8000/upload", formData, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((response) => {
          setNewData(response.data.imageUrl);
          setCurrentUi("success");
        });
    } catch (e) {
      alert(e.message);
      setCurrentUi("upload");
    }
  };

  const CurrentUI = () => {
    if (currentUi === "processing") {
      return <Processing />;
    } else if (currentUi === "success") {
      return <Phase3 data={newData} />;
    } else if (currentUi === "upload") {
      return <ImageUploader handleChange={handleChange} />;
    }
    return <ImageUploader handleChange={handleChange} />;
  };

  return <div className="App">{CurrentUI()}</div>;
}

export default App;
