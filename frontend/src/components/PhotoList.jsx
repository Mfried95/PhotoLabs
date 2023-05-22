import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const PhotoList = (props) => {
  
  const photoItems = props.PhotoData.map((photo) => {
    return <PhotoListItem 
    handleClick={props.onClick}
    photo={photo} 
    username={photo.user.name}
    imageSource={photo.urls.regular} 
    key={photo.id} 
    setLikes={props.setLikes}
    location={photo.location.city}
    />;
  });

  return <ul className="photo-list">{photoItems}</ul>;
};



export default PhotoList;
