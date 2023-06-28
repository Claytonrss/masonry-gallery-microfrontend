import PhotoGallery from "./components/PhotoGallery";

function App() {
  return (
    <>
      <PhotoGallery category="technology" layout="masonry" />
      <PhotoGallery category="nature" layout="default" />
    </>
  );
}

export default App;
