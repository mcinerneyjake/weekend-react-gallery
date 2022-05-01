import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  useEffect(() => {
    getGallery();
  }, []);

  const [galleryList, setGalleryList] = useState([]);
  const [likeNumber, setLikeNumber] = useState([]);

  const getGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    })
      .then((response) => {
        setGalleryList(response.data);
      })
      .catch((error) => {
        console.log('Error in /gallery GET route:', error);
      });
  };

  const updateLikesOnGallery = (gallery) => {
    axios({
      method: 'PUT',
      url: `/gallery/like/${gallery}`,
    })
      .then((response) => {
        getGallery();
      })
      .catch((error) => {
        console.log('Error in /gallery PUT route:', error);
      });
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Gallery of Awesome Photos</h1>
      </header>
      <GalleryList galleryList={galleryList} updateLikesOnGallery={updateLikesOnGallery} />
    </div>
  );
}

export default App;
