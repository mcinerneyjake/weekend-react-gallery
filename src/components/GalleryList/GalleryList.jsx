import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryList}) {
  return (
    <ul>
      {galleryList.map((image) => {
        return <GalleryItem key={image.id} image={image} />;
      })}
    </ul>
  );
}

export default GalleryList;
