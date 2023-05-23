import React, { useState, useEffect } from "react";
import PhotoList from "./PhotoList";
import PhotoDetailsModal from "./PhotoDetailsModal";

const HomeRoute = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [showPhoto, setShowPhoto] = useState({});
  const [photoData, setPhotoData] = useState([]);

  useEffect(() => {
    // Function to fetch photo data based on selected topic
    const fetchData = () => {
      if (props.selectedTopic) {
        // Fetch photos based on selected topic
        fetch(`http://localhost:8001/api/topics/photos/${props.selectedTopic}`)
          .then((response) => response.json())
          .then((data) => {
            setPhotoData(data);
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        // Fetch all photos if no topic is selected
        fetch("http://localhost:8001/api/photos")
          .then((response) => response.json())
          .then((data) => {
            setPhotoData(data);
          })
          .catch((error) => {
            console.error("Error fetching photos:", error);
          });
      }
    };

    // Fetch photo data when the selected topic changes
    fetchData();
  }, [props.selectedTopic]);

  const handleClick = (selectedPhoto) => {
    // Show the photo details modal and set the selected photo
    setShowModal(true);
    setShowPhoto(selectedPhoto);
    console.log(selectedPhoto);
  };

  const handleCloseModal = () => {
    // Close the photo details modal
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
      <PhotoList
        PhotoData={photoData}
        setLikes={props.setLikes}
        onClick={handleClick}
      />
    </div>
  );
};

export default HomeRoute;
