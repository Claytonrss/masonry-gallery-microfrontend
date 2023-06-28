import { Suspense, lazy, useContext } from "react";
import NavBar from "../components/NavBar";
import MenuFilters from "../components/MenuFilters";
import { PresentationContext } from "../context/PresentationContext";

const PhotoGallery = lazy(() => import("photolist/PhotoGallery"));

export const Home = () => {
  const { category, layout } = useContext(PresentationContext);

  return (
    <div className="p-2">
      <NavBar />
      <MenuFilters />
      <Suspense fallback={<div>Loading...</div>}>
        <PhotoGallery category={category} layout={layout} />
      </Suspense>
    </div>
  );
};
