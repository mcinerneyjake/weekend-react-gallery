function GalleryItem(photo) {
  return (
    <li>
      {photo.title} {photo.description}
    </li>
  );
}

export default GalleryItem;
