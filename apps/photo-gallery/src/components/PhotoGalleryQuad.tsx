import { motion } from "framer-motion";
import { GalleryProps } from "../types/gallery";

const PhotoGalleryQuad = ({ orderPhotos, photos }: GalleryProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {photos.map(({ id, src, alt }, index) => (
        <motion.div key={id} style={{ order: orderPhotos[index] }} layout>
          <img
            className="h-auto max-w-full rounded-lg"
            src={src.landscape}
            alt={alt || "Photo by Pexels"}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default PhotoGalleryQuad;
