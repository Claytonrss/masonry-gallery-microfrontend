import { useCallback, useEffect, useState } from "react";
import { createAndShuffleArray } from "../utils/array";
import { useFetchPhotosByCategory } from "../hooks/useFetchPhotosByCategory";
import Loading from "./Loading";
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
    return <div>Error: {error.error}</div>;
  }

  if (!data) {
    return <Loading />;
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
