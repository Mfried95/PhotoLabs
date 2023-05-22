import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import FavIcon from './FavIcon';

const Modal = (props) => {
  const handleCloseModal = () => {
    props.onClose();
  };

  return (
      <div className='photo-details-modal--images' key={props.photo.id}>
        <button className="close-button" onClick={handleCloseModal}>X</button>
        <FavIcon setLikes={props.setLikes} />
        <h2 className='photo-list--user-details'>{props.photo.user.username}</h2>
        <img className='photo-details-modal--image' src={props.photo.urls.raw} alt="Jacobs image" />
      </div>
  );
}

export default Modal;