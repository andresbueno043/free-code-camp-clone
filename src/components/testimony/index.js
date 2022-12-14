import React from "react";
import './index.css'

function Testimony(props){
  return(
    <div className="testimony-container">
      <img 
        className="testimony-image"
        src={require(`../../images/${props.name.toLowerCase()}-testimony.png`)}
        alt='Foto de Emma'
      />
      <div className="testimony-text-container">
        <p className="testimony-name">{props.name} {props.lastName} in {props.country}</p>
        <p className="testimony-position">{props.position} at {props.company}</p>
        <p className="testimony-text">{props.testimony}</p>
      </div>
    </div>
  );
}

export {Testimony}