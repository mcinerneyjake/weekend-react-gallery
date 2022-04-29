import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList(galleryList) {
  return (
      <ul>
          {galleryList.map((photo) => {
              return <GalleryItem key={photo.id} photo={photo} />
          })}
      </ul>
  )
}

export default GalleryList;
