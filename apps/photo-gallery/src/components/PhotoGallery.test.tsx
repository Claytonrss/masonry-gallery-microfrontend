import { render, screen } from "@testing-library/react";
import PhotoGallery from "./PhotoGallery";
import { useFetchPhotosByCategory } from "@/hooks/useFetchPhotosByCategory";
import { act } from "react-dom/test-utils";

jest.mock("@/hooks/useFetchPhotosByCategory");

describe("PhotoGallery", () => {
  const dummyCategory = "nature";
  const dummyPhotos = [
    { id: 1, src: { portrait: "url1", landscape: "url2" }, alt: "alt1" },
    { id: 2, src: { portrait: "url3", landscape: "url4" }, alt: "alt2" },
    { id: 3, src: { portrait: "url5", landscape: "url6" }, alt: "alt3" },
    { id: 4, src: { portrait: "url7", landscape: "url8" }, alt: "alt4" },
  ];

  const dummyError = "Failed to fetch photos";
  const mockUseFetchPhotosByCategory = useFetchPhotosByCategory as jest.Mock;

  beforeEach(() => {
    mockUseFetchPhotosByCategory.mockReset();
  });

  it("calls useFetchPhotosByCategory with correct category", () => {
    mockUseFetchPhotosByCategory.mockReturnValue({
      data: null,
      error: null,
    });
    render(<PhotoGallery category={dummyCategory} layout="default" />);
    expect(useFetchPhotosByCategory).toHaveBeenCalledWith(dummyCategory);
  });

  it("reorders photos when reorderPhotos event is fired", () => {
    const mockOrder = [1, 2, 3, 4];

    mockUseFetchPhotosByCategory.mockReturnValue({
      data: { photos: dummyPhotos },
      error: null,
    });

    const { rerender } = render(
      <PhotoGallery category={dummyCategory} layout="default" />
    );

    const reorderEvent = new Event("reorderPhotos");

    act(() => {
      window.dispatchEvent(reorderEvent);
    });

    rerender(<PhotoGallery category={dummyCategory} layout="default" />);

    const elements = screen.getAllByRole("img");

    const srcElementsAfterRerender = elements.map((img) =>
      img.getAttribute("src")
    );

    expect(
      srcElementsAfterRerender.every(
        (src) =>
          src &&
          dummyPhotos.map((element) => element.src.landscape).includes(src)
      )
    ).toBeTruthy();

    const styleElementsAfterRerender = elements.map((img) =>
      img.parentElement?.getAttribute("style")
    );

    expect(
      styleElementsAfterRerender.every(
        (order, index) =>
          order?.replace(/\D/g, "") === mockOrder[index].toString()
      )
    ).toBeFalsy();
  });

  it("renders error message when useFetchPhotosByCategory returns an error", () => {
    mockUseFetchPhotosByCategory.mockReturnValue({
      data: null,
      error: { message: dummyError },
    });

    render(<PhotoGallery category={dummyCategory} layout="default" />);
    expect(screen.getByText(`Error: ${dummyError}`)).toBeInTheDocument();
  });

  it("renders loading component when data is not yet loaded", () => {
    mockUseFetchPhotosByCategory.mockReturnValue({
      data: null,
      error: null,
    });

    render(<PhotoGallery category={dummyCategory} layout="default" />);
    expect(screen.getByTestId("loading-component")).toBeInTheDocument();
  });

  it("renders correct layout based on layout prop", () => {
    mockUseFetchPhotosByCategory.mockReturnValue({
      data: { photos: dummyPhotos },
      error: null,
    });

    const { rerender } = render(
      <PhotoGallery category={dummyCategory} layout="masonry" />
    );

    expect(screen.getByTestId("photo-gallery-masonry")).toBeInTheDocument();
    rerender(<PhotoGallery category="nature" layout="default" />);
    expect(screen.getByTestId("photo-gallery-quad")).toBeInTheDocument();
  });
});
