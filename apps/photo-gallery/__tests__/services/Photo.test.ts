import { getPhotosByCategory } from "@/services/Photo";
import fetchMock from "jest-fetch-mock";

describe("getPhotosByCategory", () => {
  beforeEach(() => {
    fetchMock.enableMocks();
    fetchMock.resetMocks();
  });

  it("fetches photos by category", async () => {
    const dummyData = {
      photos: [
        { id: "1", src: { landscape: "url1", portrait: "url1" }, alt: "alt1" },
        { id: "2", src: { landscape: "url2", portrait: "url2" }, alt: "alt2" },
        { id: "3", src: { landscape: "url3", portrait: "url3" }, alt: "alt3" },
      ],
      total_results: 3,
    };

    fetchMock.mockResponseOnce(JSON.stringify(dummyData));

    const result = await getPhotosByCategory("nature");

    expect(fetchMock).toHaveBeenCalledWith(
      `${process.env.VITE_API_URL}/api/photos/nature`,
      {
        headers: { Authorization: `${process.env.VITE_API_KEY}` },
      }
    );
    expect(result).toEqual(dummyData);
  });

  it("handles errors", async () => {
    fetchMock.mockRejectOnce(new Error("Failed to fetch"));

    const result = await getPhotosByCategory("nature");

    expect(result).toBeNull();
  });
});
