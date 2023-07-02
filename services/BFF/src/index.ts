import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createClient, PhotosWithTotalResults } from "pexels";

dotenv.config();

const app = express();
app.use(cors());

const port = 3001;

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

app.get("/photos/:category", async (req, res) => {
  const category = req.params.category;

  try {
    const response = await getPhotosByCategory(category);
    if (response === null) {
      res.status(500).send("Server error");
    } else {
      const photos = response.photos.map((photo) => {
        return {
          id: photo.id,
          src: photo.src,
          alt: photo.alt,
        };
      });
      res.json(photos);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
