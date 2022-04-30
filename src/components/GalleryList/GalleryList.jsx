import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

function GalleryList({galleryList, updateLikesOnGallery}) {
  return (
    <ul id="imagesContainer">
      {galleryList.map((image) => {
        return <GalleryItem key={image.id} image={image} updateLikesOnGallery={updateLikesOnGallery} />;
      })}
    </ul>
  );
}

export default GalleryList;
