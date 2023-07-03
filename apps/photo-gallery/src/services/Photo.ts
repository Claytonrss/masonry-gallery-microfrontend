const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

export async function getPhotosByCategory(category = "nature") {
  try {
    const response = await fetch(`${API_URL}/api/photos/${category}`, {
      headers: { Authorization: `${API_KEY}` },
    });

    const data = await response.json();
    if (!("photos" in data)) throw new Error("No photos found");
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
