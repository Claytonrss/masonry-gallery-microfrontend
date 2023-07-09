import { PhotosWithTotalResults } from "pexels";
import PhotoService from "./photoService";

const mockSearch = jest.fn();
jest.mock("pexels", () => ({
  createClient: () => ({
    photos: {
      search: mockSearch,
    },
  }),
}));

describe("Photo Service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return photos by category", async () => {
    const mockResponse: PhotosWithTotalResults = {
      page: 1,
      per_page: 1,
      photos: [
        {
          photographer_url: "mock_photographer_url",
          photographer_id: "1",
          liked: true,
          id: 1,
          photographer: "mock_photographer",
          width: 1000,
          height: 1000,
          alt: "mock_atl",
          avg_color: "#000#",
          src: {
            original: "mock_src",
            large2x: "mock_src",
            large: "mock_src",
            medium: "mock_src",
            small: "mock_src",
            portrait: "mock_src",
            landscape: "mock_src",
            tiny: "mock_src",
          },
          url: "mock_url",
        },
      ],
      total_results: 1,
      next_page: 2,
    };

    mockSearch.mockResolvedValueOnce(mockResponse);
    const response = await PhotoService.getPhotosByCategory("nature");
    expect(response).toEqual(mockResponse);
  });

  it("should handle when the API response doesn't contain photos", async () => {
    const mockResponse = { page: 1, per_page: 1, total_results: 0 };
    mockSearch.mockResolvedValueOnce(mockResponse);
    const response = await PhotoService.getPhotosByCategory("nature");
    expect(response).toBe(null);
  });

  it("should handle API error response", async () => {
    mockSearch.mockResolvedValueOnce(new Error("API Error"));
    const response = await PhotoService.getPhotosByCategory("nature");
    expect(response).toBe(null);
  });
});
