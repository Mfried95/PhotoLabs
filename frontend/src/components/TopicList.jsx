import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {


  const topicItems = props.topics.map((topic) => (
    <TopicListItem 
    label={topic.title} 
    key={topic.id}
    handleTopic={props.handleTopic} 
    id={topic.id} />
  ));
  return <div className="top-nav-bar--topic-list"
  onClick={() => {
    console.log()
  }}
  >{topicItems}</div>;
};

export default TopicList;
