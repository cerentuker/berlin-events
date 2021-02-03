import React from 'react'
import '../App.css';
import landingImage from '../images/landingImage.svg';

function LandingMenu() {
  return(
    <div className="App">
      <header className="App-header">
        <img src={landingImage} className="App-image" alt="Berlin Image" />
        <p>
          Click the button to see what's happening nearby!
        </p>
        <a
          className="App-button"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Show Me Some Events
        </a>
      </header>
    </div>
  )
}

export default LandingMenu;
