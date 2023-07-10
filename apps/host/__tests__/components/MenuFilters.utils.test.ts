import { reorderPhotos } from "@/components/MenuFiltersUtils";

describe("MenuFilters.utils", () => {
  it("should dispatch reorderPhotos event on window", () => {
    const mockEventListener = jest.fn();
    window.addEventListener("reorderPhotos", mockEventListener);

    reorderPhotos();

    expect(mockEventListener).toHaveBeenCalled();
    window.removeEventListener("reorderPhotos", mockEventListener);
  });
});
