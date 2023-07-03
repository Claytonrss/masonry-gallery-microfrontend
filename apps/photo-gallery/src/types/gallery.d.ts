export type GalleryProps = {
  photos: Photo[];
  orderPhotos: number[];
};

export type Photo = {
  id: number;
  src: {
    landscape: string;
    large: string;
    large2x: string;
    medium: string;
    original: string;
    portrait: string;
    small: string;
    tiny: string;
  };
  alt: string;
};

export type PhotosWithTotalResults = {
  photos: Photo[];
  totalResults: number;
};
