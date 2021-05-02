import "./Video.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import VideoSideBar from "./VideoSideBar";
import Player from "./Player";

function Video() {
  // const [path, setPath] = useState({});

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios.get("/api/video");
  //     setPath(response.data.results[0]);
  //     console.log("path", path);
  //   }
  //   fetchData();
  // }, []);
  return (
    <>
      <h2>3D in AfterEffects</h2>
      <div className="video">
        <div className="video__mainBody">
          <VideoSideBar />
          <Player />
        </div>
      </div>
    </>
  );
}

export default Video;
