import React from 'react';
import EventListItem from './EventListItem';

/**
 * Component that renders EventListItems
 * @param {Array} props event objects to be displayed
 */
const EventList = (props) => {
    return(
      <div className="cards">
        {props.events && props.events.length>0 && props.events.map((eventItem)=> <EventListItem event={eventItem}/>)}
      </div>
    )
  }

export default EventList;
