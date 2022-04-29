import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

function GalleryList({galleryList}) {
  return (
    <ul id="imageContainer">
      {galleryList.map((image) => {
        return <GalleryItem key={image.id} image={image} />;
      })}
    </ul>
  );
}

export default GalleryList;
