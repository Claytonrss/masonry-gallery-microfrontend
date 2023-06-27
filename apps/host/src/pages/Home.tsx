import { Suspense, lazy, useContext } from "react";
import NavBar from "../components/NavBar";
import MenuCategory from "../components/MenuCategory";
import { PresentationContext } from "../context/PresentationContext";

const PhotoGallery = lazy(() => import("photolist/PhotoGallery"));

export const Home = () => {
  const { category, layout } = useContext(PresentationContext);

  return (
    <div>
      <NavBar />
      <MenuCategory />
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <PhotoGallery category={category} layout={layout} />
        </Suspense>
      </div>
    </div>
  );
};
