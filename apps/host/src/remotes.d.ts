declare module "PhotoGallery/PhotoGallery" {
  const PhotoList: React.ComponentType<{
    category: string;
    layout: "default" | "masonry";
  }>;
  export default PhotoList;
}
