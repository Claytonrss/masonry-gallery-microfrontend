import { motion } from "framer-motion";
import { GalleryProps } from "../types/gallery";

const PhotoGalleryQuad = ({ orderPhotos, photos }: GalleryProps) => {
  return (
    <div className="px-4 pt-4 pb-4" data-testid="photo-gallery-quad">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
    </div>
  );
};

export default PhotoGalleryQuad;
