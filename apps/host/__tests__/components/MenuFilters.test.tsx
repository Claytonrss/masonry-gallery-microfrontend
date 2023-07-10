import { render, fireEvent, waitFor, act } from "@testing-library/react";
import MenuFilters from "@/components/MenuFilters";
import { categories, reorderPhotos } from "@/components/MenuFiltersUtils";
import { PresentationContext } from "@/context/PresentationContext";

jest.mock("@/components/MenuFiltersUtils", () => ({
  ...jest.requireActual("@/components/MenuFiltersUtils"),
  reorderPhotos: jest.fn(),
}));

describe("MenuFilters", () => {
  const mockSetLayout = jest.fn();
  const mockSetCategory = jest.fn();
  const renderWithMockContext = (component: React.ReactNode) => {
    return render(
      <PresentationContext.Provider
        value={{
          category: "nature",
          setCategory: mockSetCategory,
          layout: "default",
          setLayout: mockSetLayout,
        }}
      >
        {component}
      </PresentationContext.Provider>
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render MenuFilters component", () => {
    const { getByTestId } = render(<MenuFilters />);
    const menuFiltersElement = getByTestId("menu-filters");

    expect(menuFiltersElement).toBeInTheDocument();
  });

  it("should call the Reorder Photos function when a btn is clicked", () => {
    const mockReorderPhotos = reorderPhotos;
    const { getByTestId } = render(<MenuFilters />);
    const filterElement = getByTestId("BTNReorderPhotos");

    act(() => {
      fireEvent.click(filterElement);
    });

    expect(mockReorderPhotos).toHaveBeenCalled();
  });

  it('should change layout state to "default" when default button is clicked', async () => {
    const { getByTestId } = renderWithMockContext(<MenuFilters />);
    const defaultButton = getByTestId("BTNLayoutDefault");

    act(() => {
      fireEvent.click(defaultButton);
    });

    await waitFor(() => {
      expect(mockSetLayout).toHaveBeenCalledWith("default");
    });
  });

  it('should change layout state to "masonry" when masonry button is clicked', async () => {
    const { getByTestId } = renderWithMockContext(<MenuFilters />);
    const masonryButton = getByTestId("BTNLayoutMasonry");

    act(() => {
      fireEvent.click(masonryButton);
    });

    await waitFor(() => {
      expect(mockSetLayout).toHaveBeenCalledWith("masonry");
    });
  });

  it("should change category when category button is clicked", async () => {
    const { getByTestId } = renderWithMockContext(<MenuFilters />);
    const categoryButton = getByTestId(`BTNCategory-${categories[0]}`);

    act(() => {
      fireEvent.click(categoryButton);
    });

    await waitFor(() => {
      expect(mockSetCategory).toHaveBeenCalledWith(categories[0]);
      expect(categoryButton.classList).toContain("btn-active");
    });
  });
});
