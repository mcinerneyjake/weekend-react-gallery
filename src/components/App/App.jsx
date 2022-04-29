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

  // const addLikesToGallery = () => {
  //   axios({
  //     method: 'PUT',
  //     url: '/gallery',
  //   })
  //     .then((response) => {
  //       console.log(response);
  //       getGallery();
  //     })
  //     .catch((error) => {
  //       console.log('Error in /gallery PUT route:', error);
  //     });
  // };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Gallery of Awesome Photos</h1>
      </header>
      <GalleryList galleryList={galleryList} />
    </div>
  );
}

export default App;
