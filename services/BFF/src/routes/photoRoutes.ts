import { Router, Express } from "express";
import { getPhotosByCategory } from "../services/photoService";
import { Photo } from "pexels";

const router = Router();

router.get("/api/photos/:category", async (req, res) => {
  const category = req.params.category;

  try {
    const response = await getPhotosByCategory(category);
    if (response === null) {
      res.status(500).send("Server error");
    } else {
      const photos = response.photos.map((photo: Photo) => {
        return {
          id: photo.id,
          src: photo.src,
          alt: photo.alt,
        };
      });
      res.status(200).json({ photos });
      res.end();
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

export function applyPhotoRoutes(app: Express) {
  app.use(router);
}
