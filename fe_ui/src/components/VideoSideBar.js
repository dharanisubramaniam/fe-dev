import React from "react";
import "./VideoSideBar.css";

function VideoSideBar() {
  return (
    <div className="videoSideBar">
      <p className="videoSideBar__filler"></p>
      <p>100% completed</p>
      <form className="videoSideBar__form">
        <input
          type="checkbox"
          classNames="checkbox1"
          name="checkbox1"
          value="true"
        />
        <label for="checkbox1">1.Working with 2D layers in 3D space</label>

        <br />
        <input
          type="checkbox"
          classNames="checkbox2"
          name="checkbox2"
          value="true"
        />
        <label for="checkbox2">2.Working with classic 3D renderer</label>
        <br />
        <input
          type="checkbox"
          classNames="checkbox3"
          name="checkbox3"
          value="true"
        />
        <label for="checkbox3">3.Introducing cameras</label>
        <br />
        <input
          type="checkbox"
          classNames="checkbox4"
          name="checkbox4"
          value="true"
        />
        <label for="checkbox4">4.Working the cinema 4D renderer</label>
        <br />
        <input
          type="checkbox"
          classNames="checkbox5"
          name="checkbox5"
          value="true"
        />
        <label for="checkbox5">5.Working with camera 4D Life</label>
        <br />
        <input
          type="checkbox"
          classNames="checkbox6"
          name="checkbox6"
          value="true"
        />
        <label for="checkbox6">6.Building a composite of 3D elements</label>
        <br />
      </form>
    </div>
  );
}

export default VideoSideBar;
