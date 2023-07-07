import { render, screen } from "@testing-library/react";
import PhotoGalleryQuad from "./PhotoGalleryQuad";

describe("PhotoGalleryQuad", () => {
  test("renders correctly", () => {
    const mockPhotos = [
      { id: 1, src: { portrait: "url1", landscape: "url2" }, alt: "alt1" },
      { id: 2, src: { portrait: "url3", landscape: "url4" }, alt: "alt2" },
      { id: 3, src: { portrait: "url5", landscape: "url6" }, alt: "alt3" },
    ];

    const mockOrder = [1, 2, 0];

    render(<PhotoGalleryQuad photos={mockPhotos} orderPhotos={mockOrder} />);

    const images = screen.getAllByRole("img");
    expect(images.length).toBe(3);
  });

  test("CSS grid applies correctly", () => {
    const mockPhotos = [
      { id: 1, src: { portrait: "url1", landscape: "url2" }, alt: "alt1" },
      { id: 2, src: { portrait: "url3", landscape: "url4" }, alt: "alt2" },
      { id: 3, src: { portrait: "url5", landscape: "url6" }, alt: "alt3" },
    ];

    const mockOrder = [1, 2, 0];

    const { container } = render(
      <PhotoGalleryQuad photos={mockPhotos} orderPhotos={mockOrder} />
    );

    const grid = container.getElementsByClassName(
      "grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    )[0];

    expect(grid).toBeInTheDocument();
  });

  test("photos display in correct order", () => {
    const mockPhotos = [
      { id: 1, src: { portrait: "url1", landscape: "url2" }, alt: "alt1" },
      { id: 2, src: { portrait: "url3", landscape: "url4" }, alt: "alt2" },
      { id: 3, src: { portrait: "url5", landscape: "url6" }, alt: "alt3" },
    ];
    const mockOrder = [2, 0, 1];

    render(<PhotoGalleryQuad photos={mockPhotos} orderPhotos={mockOrder} />);

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
