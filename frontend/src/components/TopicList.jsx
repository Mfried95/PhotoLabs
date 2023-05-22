import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {
  const topicItems = props.topics.map((topic) => (
    <TopicListItem 
    link={topic.link} 
    label={topic.title} 
    key={topic.id} />
  ));
  return <div className="top-nav-bar--topic-list">{topicItems}</div>;
};

export default TopicList;
