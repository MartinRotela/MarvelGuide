import React from "react";
import { Link } from "react-router-dom";
import "./BackButton.css";

function BackButton() {
  return (
    <React.Fragment>
      <div className="back">
        <Link to="/">
          <p>Back</p>
        </Link>
      </div>
    </React.Fragment>
  );
}

export default BackButton;
