import { Suspense, lazy } from "react";

const PhotoGallery = lazy(() => import("photolist/PhotoGallery"));

export const Home = () => {
  return (
    <div>
      <h1>Página Home</h1>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <PhotoGallery />
        </Suspense>
      </div>
    </div>
  );
};
