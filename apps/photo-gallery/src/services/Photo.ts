import { PhotosWithTotalResults, createClient } from "pexels";

const API_KEY = import.meta.env.VITE_API_KEY;
const photosClient = createClient(API_KEY);

export async function getPhotosByCategory(
  category = "nature"
): Promise<PhotosWithTotalResults | null> {
  try {
    const response = await photosClient.photos.search({
      query: category,
      per_page: 18,
    });
    if (!("photos" in response)) throw new Error("No photos found");
    console.log("response: ", response);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}
