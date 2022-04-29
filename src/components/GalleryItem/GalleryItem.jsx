import './GalleryItem.css';

function GalleryItem({ image }) {
  return (
    <div id='imageContainer'>
      <li>
        <img src={image.path} id='image'></img>
      </li>
      <p>{image.description}</p>
      <button>Like</button>
      <p>{image.likes}</p>
    </div>
  );
}

export default GalleryItem;
