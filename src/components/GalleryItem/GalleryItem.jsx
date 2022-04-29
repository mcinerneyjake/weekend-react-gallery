function GalleryItem({image}) {
  return (
    <li>
      {image.path} {image.description}
    </li>
  );
}

export default GalleryItem;
