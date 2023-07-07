import { motion } from "framer-motion";
import Masonry from "react-masonry-css";
import { GalleryProps } from "@/types/gallery";

const PhotoGalleryMasonry = ({ photos, orderPhotos }: GalleryProps) => {
  const breakpointColumnsObj = {
    default: 3,
    768: 1,
  };

  return (
    <div className="px-4 pb-4" data-testid="photo-gallery-masonry">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {photos.map(({ id, src, alt }, index) => (
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
  );
};

export default PhotoGalleryMasonry;
