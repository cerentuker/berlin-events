import React from 'react';

const EventListItem = (props) => {
  return(
    <div className="card">
     bezirk: {props.event.bezirk}
     {props.event.bemerkungen}
          <div className="card-body">
            bezeichnung: {props.event.bezeichnung}
            strasse: {props.event.strasse}
            plz: {props.event.plz}
            at: {props.event.von}-{props.event.bis}
            {props.event.zeit}
            veranstalter: {props.event.veranstalter}
            mail: {props.event.mail}
            webpage: {props.event.www}
          </div>
    </div>
  )
}

class Card extends React.Component {
  render() {
    return(
        <div className="card">
          <img src={this.props.img} />
          <div className="card-body">
            <h2>{this.props.title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <h5>{this.props.author}</h5>
          </div>
        </div>
    )
  }
}

export default EventListItem;
