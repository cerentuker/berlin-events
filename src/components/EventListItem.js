import React from 'react';

/**
 * Component that renders the event cards
 * @param {Object} props is a single event object
 */
const EventListItem = (props) => {
    return(
        <div className="card"  key={props.event.id}>
            <div className="card-body">
            <h2> {props.event.bezirk} </h2>
            <div className="address"> {props.event.strasse} {props.event.plz} </div>
            <div className="eventTime">
                { (props.event.bis !== props.event.von) ? props.event.von : props.event.von  + ' bis '  + props.event.bis} {props.event.zeit} 
            </div>
            <p> {props.event.bezeichnung} </p>
            {props.event.bemerkungen}
            <h5>{props.event.veranstalter.split(',')} {props.event.mail } {props.event.www} </h5>
          </div>
    </div>
  )
}

export default EventListItem;
