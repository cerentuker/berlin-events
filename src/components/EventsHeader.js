import React from 'react'
import '../App.css';
import landingImage from '../images/landingImage.svg';

/**
 * The page header that displays the berlin logo
 */
function EventsHeader(){
  return(
    <header className='app-header fill-window'>
      <img className='app-logo' src={landingImage} alt="Berlin Logo" />
    </header>
  )
}

export default EventsHeader;
