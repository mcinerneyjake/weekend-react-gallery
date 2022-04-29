import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  useEffect(() => {
    getGallery();
  }, []);

  const [galleryList, setGalleryList] = useState([]);

  const getGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    })
      .then((response) => {
        console.log(response.data);
        setGalleryList(response.data);
      })
      .catch((error) => {
        console.log('Error in /gallery GET route:', error);
      });
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Gallery of Awesome Photos</h1>
      </header>
      <GalleryList galleryList={galleryList} />
      <img src='images/goat_small.jpg' />
    </div>
  );
}

export default App;
