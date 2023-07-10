import { PhotosWithTotalResults, createClient } from "pexels";
import dotenv from "dotenv";
dotenv.config();

export const PEXELS_API_KEY = process.env.PEXELS_API_KEY ?? "";

async function getPhotosByCategory(
  category: string
): Promise<PhotosWithTotalResults | null> {
  try {
    const photosClient = createClient(PEXELS_API_KEY);
    const response = await photosClient.photos.search({
      query: category,
      per_page: 18,
    });
    if (!("photos" in response)) throw new Error("No photos found");
    return response;
  } catch (error) {
    return null;
  }
}

export default {
  getPhotosByCategory,
};
