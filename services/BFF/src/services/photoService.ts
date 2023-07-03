import { PhotosWithTotalResults, createClient } from "pexels";
import dotenv from "dotenv";
dotenv.config();

const PEXELS_API_KEY = process.env.PEXELS_API_KEY || "";

const photosClient = createClient(PEXELS_API_KEY);

export async function getPhotosByCategory(
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
