import React from 'react';
import '../styles/TopicListItem.scss'

const TopicListItem = (props) => {
  console.log('topic props', props.label)
  return (
    <div className="topic-list--item">
      {props.label}
    </div>
  )
}

TopicListItem.defaultProps = {
  id: 1,
  label: 'Nature',
  link: 'link placeholder' 
}

export default TopicListItem