import React, { useState } from 'react';
import '../styles/PhotoListItem.scss';
import FavIcon from './FavIcon';


const PhotoListItem = (props) => {
   
  return (
      <div
        className='photo-list--item'
        key={props.photo.id}
      >
        <div className='icon-div'><FavIcon setLikes={props.setLikes} /></div>
        <img className='photo-list--image' 
        onClick={() => props.handleClick(props.photo)}
        src={props.photo.urls.regular} alt="Jacobs image" width={300} />
        <div className='photo-list--user-details'>
          <div className='photo-list--user-profile'>
          <img src={props.photo.user.profile} alt="" width={40}/>
          </div>
        {props.photo.user.name}
        </div>
        <div className='photo-list--user-info photo-list--user-location'>
        {props.photo.location.city}, {props.photo.location.country}
        </div>
      </div>
  );
}

export default PhotoListItem;