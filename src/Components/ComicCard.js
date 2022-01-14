import React from "react";
import "./ComicCard.css";
import { Link } from "react-router-dom";

function ComicCard(props) {
  return (
    <div>
      <Link to={"/comic?" + props.id}>
        <div className="comic-card">
          <img src={props.path + "." + props.extension} alt="" />
          <p>{props.title}</p>
        </div>
      </Link>
    </div>
  );
}

export default ComicCard;
