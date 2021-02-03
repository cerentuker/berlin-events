import React from 'react'
import '../App.css';
import landingImage from '../images/landingImage.svg';

function EventsHeader(){
  return(
    <header className='app-header fill-window'>
      <img className='app-logo' src={landingImage} alt="Berlin Logo" />
    </header>
  )
}

export default EventsHeader;
