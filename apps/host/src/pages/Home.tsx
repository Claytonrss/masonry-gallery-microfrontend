import { Suspense, lazy, useContext } from "react";
import MenuFilters from "@/components/MenuFilters";
import { PresentationContext } from "@/context/PresentationContext";
import Loading from "@/components/Loading";
import NavBar from "@/components/NavBar";

const PhotoGallery = lazy(() => import("PhotoGallery/PhotoGallery"));

export const Home = () => {
  const { category, layout } = useContext(PresentationContext);

  return (
    <div className="p-2">
      <NavBar />
      <MenuFilters />
      <Suspense fallback={<Loading />}>
        <PhotoGallery category={category} layout={layout} />
      </Suspense>
    </div>
  );
};
