import React, { useState, useEffect } from 'react';
import PhotoList from './PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';

const HomeRoute = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [showPhoto, setShowPhoto] = useState({});
  const [photoData, setPhotoData] = useState([]);

  useEffect(() => {

    const fetchData = () => {
      fetch('http://localhost:8001/api/photos')
        .then((response) => response.json())
        .then((data) => {
          setPhotoData(data);
        })
        .catch((error) => {
          console.error('Error fetching photos:', error);
        });
    };

    fetchData();
  }, []);

  const handleClick = (selectedPhoto) => {
    setShowModal(true);
    setShowPhoto(selectedPhoto);
    console.log(selectedPhoto);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="home-route">
      {showModal && (
        <PhotoDetailsModal
          photos={photoData}
          photo={showPhoto}
          setLikes={props.setLikes}
          onClose={handleCloseModal}
        />
      )}
      <PhotoList PhotoData={photoData} setLikes={props.setLikes} onClick={handleClick} />
    </div>
  );
};

export default HomeRoute;