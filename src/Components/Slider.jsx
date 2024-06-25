import React, { useState } from "react";
import "./Slider.css";

const Slider = ({ isLoop, pictures }) => {
  const [imgPosition, setImgPosition] = useState(0);

  const leftClickHandler = () => {
    if (isLoop) {
      if (imgPosition === 0) {
        setImgPosition(pictures.length - 1);
      } else {
        if (imgPosition > 0) setImgPosition(imgPosition - 1);
      }
    } else {
      if (imgPosition === 0) {
        setImgPosition(0);
      } else {
        if (imgPosition > 0) setImgPosition(imgPosition - 1);
      }
    }
  };
  const circleClickHandler = (numb) => {
    setImgPosition(numb);
  };
  const rightClickHandler = () => {
    if (isLoop) {
      if (imgPosition === pictures.length - 1) {
        setImgPosition(0);
      } else {
        if (imgPosition < pictures.length - 1) setImgPosition(imgPosition + 1);
      }
    } else {
      if (imgPosition === pictures.length - 1) {
        setImgPosition(pictures.length - 1);
      } else {
        if (imgPosition < pictures.length - 1) setImgPosition(imgPosition + 1);
      }
    }
  };

  return (
    <div className="page">
      <div className="picturePage">
        <img
          src={pictures[imgPosition]}
          alt="Montain and lake"
          className="picture"
        />
      </div>
      <div className="buttons">
        <button className="leftButton" onClick={() => leftClickHandler()}>
          {"<"}
        </button>
        {pictures.map((el, i) => (
          <button
            key={i}
            className={`circleButton ${imgPosition === i ? "active" : ""}`}
            onClick={() => circleClickHandler(i)}
          ></button>
        ))}
        <button className="rightButton" onClick={() => rightClickHandler()}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Slider;
