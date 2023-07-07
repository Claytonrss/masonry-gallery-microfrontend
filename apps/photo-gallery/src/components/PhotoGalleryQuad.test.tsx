import { render, screen } from "@testing-library/react";
import PhotoGalleryQuad from "./PhotoGalleryQuad";

describe("PhotoGalleryQuad", () => {
  const dummyPhotos = [
    { id: 1, src: { portrait: "url1", landscape: "url2" }, alt: "alt1" },
    { id: 2, src: { portrait: "url3", landscape: "url4" }, alt: "alt2" },
    { id: 3, src: { portrait: "url5", landscape: "url6" }, alt: "alt3" },
    { id: 4, src: { portrait: "url7", landscape: "url8" }, alt: "alt4" },
  ];

  const mockOrder = [1, 2, 0, 3];

  it("renders correctly", () => {
    render(<PhotoGalleryQuad photos={dummyPhotos} orderPhotos={mockOrder} />);

    const images = screen.getAllByRole("img");
    expect(images.length).toBe(dummyPhotos.length);
  });

  it("CSS grid applies correctly", () => {
    const { container } = render(
      <PhotoGalleryQuad photos={dummyPhotos} orderPhotos={mockOrder} />
    );

    const grid = container.getElementsByClassName(
      "grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    )[0];

    expect(grid).toBeInTheDocument();
  });

  it("photos display in correct order", () => {
    render(<PhotoGalleryQuad photos={dummyPhotos} orderPhotos={mockOrder} />);

    const orders = screen
      .getAllByRole("img")
      .map((img) =>
        img.parentElement?.getAttribute("style")?.replace(/\D/g, "")
      );

    expect(orders.every((order, i) => +order! === mockOrder[i])).toBeTruthy();
  });
});
