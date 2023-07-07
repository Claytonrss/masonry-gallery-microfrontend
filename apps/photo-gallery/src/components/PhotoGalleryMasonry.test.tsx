import { render, screen } from "@testing-library/react";
import PhotoGalleryMasonry from "./PhotoGalleryMasonry";

describe("PhotoGalleryMasonry", () => {
  test("renders correctly", () => {
    const mockPhotos = [
      { id: 1, src: { portrait: "url1", landscape: "url2" }, alt: "alt1" },
      { id: 2, src: { portrait: "url3", landscape: "url4" }, alt: "alt2" },
      { id: 3, src: { portrait: "url5", landscape: "url6" }, alt: "alt3" },
    ];
    const mockOrder = [1, 2, 0];

    render(<PhotoGalleryMasonry photos={mockPhotos} orderPhotos={mockOrder} />);

    const images = screen.getAllByRole("img");
    expect(images.length).toBe(3);
  });

  test("masonry grid applies correctly", () => {
    const mockPhotos = [
      { id: 1, src: { portrait: "url1", landscape: "url2" }, alt: "alt1" },
      { id: 2, src: { portrait: "url3", landscape: "url4" }, alt: "alt2" },
      { id: 3, src: { portrait: "url5", landscape: "url6" }, alt: "alt3" },
    ];
    const mockOrder = [1, 2, 0];

    const { container } = render(
      <PhotoGalleryMasonry photos={mockPhotos} orderPhotos={mockOrder} />
    );

    const masonryGrid = container.getElementsByClassName("my-masonry-grid")[0];
    const masonryGridColumn = container.getElementsByClassName(
      "my-masonry-grid_column"
    )[0];

    expect(masonryGrid).toBeInTheDocument();
    expect(masonryGridColumn).toBeInTheDocument();
  });

  test("photos display in correct order", () => {
    const mockPhotos = [
      { id: 1, src: { portrait: "url1", landscape: "url2" }, alt: "alt1" },
      { id: 2, src: { portrait: "url3", landscape: "url4" }, alt: "alt2" },
      { id: 3, src: { portrait: "url5", landscape: "url6" }, alt: "alt3" },
    ];
    const mockOrder = [2, 0, 1];

    render(<PhotoGalleryMasonry photos={mockPhotos} orderPhotos={mockOrder} />);

    const images = screen.getAllByRole("img");

    expect(images[0].parentElement?.getAttribute("style")).toBe(
      `order: ${mockOrder[0]};`
    );
    expect(images[1].parentElement?.getAttribute("style")).toBe(
      `order: ${mockOrder[1]};`
    );
    expect(images[2].parentElement?.getAttribute("style")).toBe(
      `order: ${mockOrder[2]};`
    );
  });
});
