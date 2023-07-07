let API_KEY = "";
let API_URL = "";

console.log("process.env: ", process.env);
if (process.env.NODE_ENV !== "test") {
  API_KEY = process.env.VITE_API_KEY || "";
  API_URL = process.env.VITE_API_URL || "";
}

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
