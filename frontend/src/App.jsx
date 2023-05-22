import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./App.scss";
import HomeRoute from "./components/HomeRoute";
import TopNavigationBar from "./components/TopNavigationBar";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [likes, setLikes] = useState(0);
  const [topicData, setTopicData] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleTopic(id) {
    setSelectedTopic(id);
  }

  return (
    <div className="App">
      <TopNavigationBar
        likes={likes}
        setLikes={setLikes}
        topicData={topicData}
        setTopicData={setTopicData}
        handleTopic={handleTopic}
      />

      <HomeRoute setLikes={setLikes} selectedTopic={selectedTopic} />
    </div>
  );
};

export default App;
