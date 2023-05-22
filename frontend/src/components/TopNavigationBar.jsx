import React, { useEffect, useState } from 'react';
import TopicList from './TopicList';
import FavIcon from './FavIcon';
import '../styles/TopNavigationBar.scss';

const TopNavigation = (props) => {
  useEffect(() => {
    const fetchData = () => {
      
      fetch('http://localhost:8001/api/topics')
        .then((response) => response.json())
        .then((data) => {
          props.setTopicData(data); // Corrected variable name
          
        })
        .catch((error) => {
          console.error('Error fetching topics:', error);
        });
    };

    fetchData();
  }, []);

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo">PhotoLabs</span>
      <TopicList topics={props.topicData} handleTopic={props.handleTopic} />
      <FavIcon likes={props.likes} />
    </div>
  );
};

export default TopNavigation;