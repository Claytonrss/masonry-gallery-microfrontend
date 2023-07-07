import { useCallback, useEffect, useState } from "react";
import { createAndShuffleArray } from "../utils/array";
import { useFetchPhotosByCategory } from "../hooks/useFetchPhotosByCategory";
import PhotoGalleryMasonry from "./PhotoGalleryMasonry";
import PhotoGalleryQuad from "./PhotoGalleryQuad";

type Props = {
  category: string;
  layout: "default" | "masonry";
};

const PhotoGallery = ({ category, layout }: Props) => {
  const { data, error } = useFetchPhotosByCategory(category);
  const [orderPhotos, setOrderPhotos] = useState<number[]>([]);

  const reorderPhotos = useCallback(() => {
    if (data?.photos.length)
      setOrderPhotos(createAndShuffleArray(data.photos.length));
  }, [data?.photos.length]);

  useEffect(() => {
    window.addEventListener("reorderPhotos", () => {
      reorderPhotos();
    });
  }, [reorderPhotos]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative animate-spin rounded-full h-32 w-32 border-t-4 border-blue-400"></div>
      </div>
    );
  }

  return (
    <>
      {layout === "masonry" && (
        <PhotoGalleryMasonry photos={data.photos} orderPhotos={orderPhotos} />
      )}
      {layout === "default" && (
        <PhotoGalleryQuad photos={data.photos} orderPhotos={orderPhotos} />
      )}
    </>
  );
};

export default PhotoGallery;
