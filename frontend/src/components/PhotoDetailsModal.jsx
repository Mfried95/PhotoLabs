import React from "react";
import FavIcon from "./FavIcon";
import PhotoList from "./PhotoList";
import "../styles/PhotoDetailsModal.scss"

const PhotoDetailsModal = (props) => {
  console.log('modal props', props)

  const handleCloseModal = () => {
    props.onClose();
  };

  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal--images" key={props.photo.id}>
        <div className="button-container">
          <button
            className="photo-details-modal--close-button"
            onClick={handleCloseModal}
          >
            X
          </button>
          
        </div>
        <h2 className="photo-list--user-details">
          {props.photo.user.name}
        </h2>
        <div className='icon-div'><FavIcon setLikes={props.setLikes} /></div>
        <img
          className="photo-details-modal--image"
          src={props.photo.urls.regular}
          alt="Jacobs image"
        />
        <h2>Similar Photos</h2>
        <div className="photo-details-modal--similar-photos">
          <PhotoList PhotoData={props.photos} setLikes={props.setLikes} />
        </div>
      </div>
    </div>
  );
};


export default PhotoDetailsModal;
