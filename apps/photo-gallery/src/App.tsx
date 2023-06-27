import PhotoGallery from "./components/PhotoGallery";

function App() {
  return (
    <>
      <PhotoGallery category="nature" layout="default" />
      <PhotoGallery category="technology" layout="masonry" />
    </>
  );
}

export default App;
