import React from 'react';
import EventListItem from './EventListItem';

const EventList = (props) => {
    return(
      <div className="cards">
        {props.events && props.events.length>0 && props.events.map((eventItem)=> <EventListItem event={eventItem}/>)}
      </div>
    )
  }

export default EventList;
