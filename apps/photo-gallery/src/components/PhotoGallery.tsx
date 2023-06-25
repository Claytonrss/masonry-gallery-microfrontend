import { useState } from "react";
import { motion } from "framer-motion";
import Masonry from "react-masonry-css";
import { useFetchPhotosByCategory } from "../hooks/useFetchPhotosByCategory";
import { createAndShuffleArray } from "../utils/array";
import Loading from "./Loading";

const PhotoGallery = () => {
  const { data, error } = useFetchPhotosByCategory("nature");
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

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <div>
      <div>
        <button className="px-4 py-2" type="button" onClick={shufflePhotos}>
          Shuffle
        </button>
      </div>
      <div className="px-4 pb-4">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {data.photos.map(({ id, src, alt }, index) => (
            <motion.div key={id} style={{ order: orderPhotos[index] }} layout>
              <img
                className="h-auto max-w-full rounded-lg mt-4"
                src={index % 2 === 0 ? src.portrait : src.landscape}
                alt={alt || "Photo by Pexels"}
              />
            </motion.div>
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default PhotoGallery;
