import { Suspense, lazy, useContext } from "react";
import MenuFilters from "@/components/MenuFilters";
import { PresentationContext } from "@/context/PresentationContext";
import NavBar from "@/components/NavBar";

const PhotoGallery = lazy(() => import("PhotoGallery/PhotoGallery"));

export const Home = () => {
  const { category, layout } = useContext(PresentationContext);

  return (
    <div className="p-2">
      <NavBar />
      <MenuFilters />
      <Suspense
        fallback={
          <div
            data-testid="loading-component"
            className="fixed inset-0 flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative animate-spin rounded-full h-32 w-32 border-t-4 border-blue-400"></div>
          </div>
        }
      >
        <PhotoGallery category={category} layout={layout} />
      </Suspense>
    </div>
  );
};
