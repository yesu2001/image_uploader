import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Post from "./model.js";
import { config } from "dotenv";
import multer from "multer";
import FormData from "form-data";
import axios from "axios";
import cloudinary from "cloudinary";

const app = express();
config();
// app.use(express.json({ limit: "30mb" }));
// app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const url = process.env.DB_URL;
const port = process.env.PORT || 5000;
const cloud_URL = process.env.CLOUD_URL;
const preset_name = process.env.PRESET_NAME;
const cloud_name = process.env.CLOUD_NAME;
const api_key = process.env.API_KEY;
const api_secret = process.env.API_SECRET;

// Configure Cloudinary
cloudinary.config({
  cloud_name: cloud_name,
  api_key: api_key,
  api_secret: api_secret,
});

app.get("/", (req, res) => res.send("hello world!"));

const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const imageUrl = result.secure_url;
    res.status(201).json({ imageUrl });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

mongoose.connect(url).then(() => {
  app.listen(port, () => {
    console.log(`listening on port ${port} and connected to DB`);
  });
});
