import './GalleryItem.css';

function GalleryItem({ image }) {
  return (
    <div>
      <li>
        <img src={image.path} id='image'></img>
      </li>
      <p>{image.description}</p>
    </div>
  );
}

export default GalleryItem;
