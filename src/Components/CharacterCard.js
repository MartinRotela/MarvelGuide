import React from "react";
import "./CharacterCard.css";
import { Link } from "react-router-dom";

function CharacterCard(props) {
  return (
    <div>
      <Link to={"/character?" + props.id}>
        <div className="character-card">
          <img src={props.path + "." + props.extension} alt="" />
          <p>{props.name}</p>
        </div>
      </Link>
    </div>
  );
}

export default CharacterCard;
