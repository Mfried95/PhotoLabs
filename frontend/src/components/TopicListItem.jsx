import React, { useState } from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = (props) => {
  const [items, setItems] = useState([]);

  return (
    <div className="topic-list--item" onClick={() => props.handleTopic(props.id)}>
      {props.label} 
      {items.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default TopicListItem;


