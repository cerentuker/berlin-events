import React from 'react';

const EventListItem = (props) => {
    return(
        <div className="card"  key={props.event.id}>
            <div className="card-body">
            <h2> {props.event.bezirk} </h2>
            <div className="address"> {props.event.strasse} {props.event.plz} </div>
            <div className="eventTime">
                { (props.event.bis !== props.event.von) ? props.event.von : props.event.von  + ' bis '  + props.event.bis} {props.event.zeit} 
            </div>
            {props.event.bezeichnung}
            {props.event.bemerkungen}
            <h5>{props.event.veranstalter.split(',')} {props.event.mail } {props.event.www} </h5>
          </div>
    </div>
  )
}

export default EventListItem;
