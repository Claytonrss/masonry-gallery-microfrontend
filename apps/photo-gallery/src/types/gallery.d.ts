export type GalleryProps = {
  photos: Photo[];
  orderPhotos: number[];
};

export type Photo = {
  id: number;
  src: {
    landscape: string;
    portrait: string;
  };
  alt: string;
};

export type PhotosWithTotalResults = {
  photos: Photo[];
  totalResults: number;
};
