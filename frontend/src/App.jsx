import React from "react";
import { useState } from "react";
import "./App.scss";
import HomeRoute from "./components/HomeRoute";
import TopNavigationBar from "./components/TopNavigationBar";

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [likes, setLikes] = useState(0)


  return (
    <div className="App">
    <TopNavigationBar likes={likes} setLikes={setLikes} />
    <HomeRoute setLikes={setLikes} />
  </div>
  )
}

 

export default App;
