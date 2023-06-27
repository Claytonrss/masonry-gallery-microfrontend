import { useState } from "react";
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

  const shufflePhotos = () => {
    if (data?.photos.length)
      setOrderPhotos(createAndShuffleArray(data.photos.length));
  };

  if (error) {
    return <div>Error: {error.error}</div>;
  }

  if (!data) {
    return <Loading />;
  }

  return (
    <div>
      <div>
        <button className="px-4 py-2" type="button" onClick={shufflePhotos}>
          Shuffle
        </button>
      </div>
      {layout === "masonry" && (
        <PhotoGalleryMasonry photos={data.photos} orderPhotos={orderPhotos} />
      )}
      {layout === "default" && (
        <PhotoGalleryQuad photos={data.photos} orderPhotos={orderPhotos} />
      )}
    </div>
  );
};

export default PhotoGallery;
