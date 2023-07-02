import express from "express";
import { PhotosWithTotalResults, createClient } from "pexels";
import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.PEXELS_API_KEY || "";
const photosClient = createClient(API_KEY);

async function getPhotosByCategory(
  category: string
): Promise<PhotosWithTotalResults | null> {
  try {
    const response = await photosClient.photos.search({
      query: category,
      per_page: 18,
    });
    if (!("photos" in response)) throw new Error("No photos found");
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}

const app = express();

app.get("/api/photos/:category", async (req, res) => {
  const category = req.params.category;

  try {
    const response = await getPhotosByCategory(category);
    if (response === null) {
      res.status(500).send("Server error");
    } else {
      const photos = response.photos.map((photo) => {
        return {
          url: photo.src.original,
          photographer: photo.photographer,
          photographer_url: photo.photographer_url,
        };
      });
      res.json(photos);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

export default app;
