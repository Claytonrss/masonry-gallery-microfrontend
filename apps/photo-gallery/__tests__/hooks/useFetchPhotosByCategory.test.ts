import { renderHook } from "@testing-library/react-hooks";
import { useFetchPhotosByCategory } from "@/hooks/useFetchPhotosByCategory";
import { getPhotosByCategory } from "@/services/Photo";

jest.mock("@/services/Photo");

describe("useFetchPhotosByCategory", () => {
  const mockGetPhotosByCategory = getPhotosByCategory as jest.Mock;

  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    mockGetPhotosByCategory.mockReset();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("should fetch photos by category", async () => {
    const dummyData = {
      photos: [
        { id: "1", src: { landscape: "url1", portrait: "url1" }, alt: "alt1" },
        { id: "2", src: { landscape: "url2", portrait: "url2" }, alt: "alt2" },
        { id: "3", src: { landscape: "url3", portrait: "url3" }, alt: "alt3" },
      ],
      total_results: 3,
    };

    mockGetPhotosByCategory.mockResolvedValue(dummyData);

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchPhotosByCategory("nature")
    );

    expect(result.current.data).toBeUndefined();
    expect(result.current.error).toBeUndefined();

    await waitForNextUpdate();

    expect(result.current.data).toEqual(dummyData);
    expect(result.current.error).toBeUndefined();
  });

  it("should handle error", async () => {
    const error = new Error("Failed to fetch");

    mockGetPhotosByCategory.mockRejectedValue(error);

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchPhotosByCategory("nature")
    );

    expect(result.current.data).toBeUndefined();
    expect(result.current.error).toBeUndefined();

    await waitForNextUpdate();

    expect(result.current.data).toBeUndefined();
    expect(result.current.error).toEqual(error);
  });
});
