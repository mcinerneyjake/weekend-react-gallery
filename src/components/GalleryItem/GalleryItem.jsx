import { useState } from 'react';
import './GalleryItem.css';

function GalleryItem({ image, updateLikesOnGallery }) {
  const [isImageSideUp, setIsImageSideUp] = useState(true);

  const flipImage = () => {
    setIsImageSideUp(!isImageSideUp);
    console.log(isImageSideUp);
  };

  const renderImage = () => {
    if (isImageSideUp) {
      return <img src={image.path} id='image'></img>;
    } else {
      return <p>{image.description}</p>;
    }
  };

  const handleLikes = (e) => {
    e.preventDefault();
    updateLikesOnGallery(image.id);
  };

  return (
    <div id='imageContainer'>
      <li onClick={flipImage}>{renderImage()}</li>
      <button onClick={handleLikes}>Like</button>
      <p>{image.likes}</p>
    </div>
  );
}

export default GalleryItem;
