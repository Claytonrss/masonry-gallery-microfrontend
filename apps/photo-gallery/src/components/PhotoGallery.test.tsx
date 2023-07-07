import { render } from "@testing-library/react";
import PhotoGallery from "./PhotoGallery";
import { useFetchPhotosByCategory } from "@/hooks/useFetchPhotosByCategory";

jest.mock("@/hooks/useFetchPhotosByCategory");

describe("PhotoGallery", () => {
  test("calls useFetchPhotosByCategory with correct category", () => {
    const mockCategory = "nature";

    // Criamos um mock de retorno para o nosso hook
    (useFetchPhotosByCategory as jest.Mock).mockReturnValue({
      data: null,
      error: null,
    });

    render(<PhotoGallery category={mockCategory} layout="default" />);

    // Verificamos se o hook foi chamado com a categoria correta
    expect(useFetchPhotosByCategory).toHaveBeenCalledWith(mockCategory);
  });

  test("reorders photos when reorderPhotos event is fired", () => {
    // Teste de ordenação de fotos aqui
  });

  test("renders error message when useFetchPhotosByCategory returns an error", () => {
    // Teste de exibição de erro aqui
  });

  test("renders loading component when data is not yet loaded", () => {
    // Teste de exibição de loading aqui
  });

  test("renders correct gallery component with correct photos and order based on layout", () => {
    // Teste de renderização das galerias aqui
  });
});
