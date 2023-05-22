import React from 'react';
import TopicList from './TopicList';
import FavIcon from './FavIcon';
import TopicData from "../mocks/topics.json"

import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {


  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo">PhotoLabs</span>
      <TopicList topics={TopicData}/>
      <FavIcon likes={props.likes}  />
    </div>
  )
}

export default TopNavigation;