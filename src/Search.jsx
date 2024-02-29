import React, { useState } from 'react';
import GoogleImage from './assets/google.png';
import SearchIcon from './assets/search.svg';
import CameraIcon from './assets/camera.svg';
import MicIcon from './assets/mic.svg';

function Body() {

  const [isSearchHovered, setIsSearchHovered] = useState(false);

  const imageContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "1.8rem",
  };

  const searchContainer = {
    border: isSearchHovered ? "1px solid #202124" : "1px solid grey",
    boxShadow: isSearchHovered ? "0px 0px 20px -7px rgba(0,0,0,0.75)" : "none",
    backgroundColor: isSearchHovered ? "#37383b" : "transparent",
    width: "100%",
    height: "3rem",
    borderRadius: "5rem",
    overflow: "hidden",
    position: "relative",
  };


  const searchBox = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    maxWidth: "37rem",
  };

  const inputContainer = {
    height: "100%",
    width: "100%",
    backgroundColor: "transparent",
    outline: "none",
    border: "none",
    padding: "1rem 5.8rem 1rem 3.2rem",
    fontSize: "1rem",
    color: "#d4d4d4",
  };

  const searchImg = {
    position: "absolute",
    height: "1.4rem",
    width: "1.4rem",
    top: "50%",
    left: "1rem",
    transform: "translateY(-50%)",
    zIndex: "99",
  };

  const micIcon = {
    cursor: "pointer",
    position: "absolute",
    height: "1.3rem",
    right: "11%",
    top: "50%",
    transform: "translateY(-50%)"
  };

  const camIcon = {
    cursor: "pointer",
    position: "absolute",
    height: "1.4rem",
    right: "3%",
    top: "50%",
    transform: "translateY(-50%)"
  };



  return (
    <>
      <div style={searchBox}>
        <div className="image-container">
          <img style={imageContainer} src={GoogleImage} alt="Google Image" />
        </div>
        <div style={searchContainer}
          className="search-container"
          onMouseEnter={() => setIsSearchHovered(true)}
          onMouseLeave={() => setIsSearchHovered(false)}
        >
          <img style={camIcon} src={CameraIcon} alt="camera icon" />
          <img style={micIcon} src={MicIcon} alt="camera icon" />
          <img style={searchImg} src={SearchIcon} alt="search icon" />
          <input style={inputContainer} type="text" />
        </div>
      </div>
    </>
  );
};

export default Body;