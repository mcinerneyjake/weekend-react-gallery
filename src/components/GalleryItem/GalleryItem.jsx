import { useState } from 'react';
import './GalleryItem.css';

function GalleryItem({ image }) {
  let content;
  
  function flipImageOnClick() {
    if (image.id) {
      content = image.description;
    } else {
      content = image.path;
    }
  }

  return (
    <div id='imageContainer'>
      <li>
        <img src={image.path} id='image' onClick={flipImageOnClick}></img>
      </li>
      <p>{image.description}</p>
      <button>Like</button>
      <p>{image.likes}</p>
    </div>
  );
}

export default GalleryItem;
