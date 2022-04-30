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

  return (
    <div onClick={flipImage} id='imageContainer'>
      <li>{renderImage()}</li>
      <button onClick={() => updateLikesOnGallery(image.likes)}>Like</button>
      <p>{image.likes}</p>
    </div>
  );
}

export default GalleryItem;
