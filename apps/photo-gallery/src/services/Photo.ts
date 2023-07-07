let API_KEY = process.env.VITE_API_KEY;
let API_URL = process.env.VITE_API_URL;

export async function getPhotosByCategory(category = "nature") {
  try {
    const response = await fetch(`${API_URL}/api/photos/${category}`, {
      headers: { Authorization: `${API_KEY}` },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (!("photos" in data)) {
      throw new Error("No photos found");
    }
    return data;
  } catch (error) {
    return null;
  }
}
