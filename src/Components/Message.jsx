import React from "react";
import "../App.css";

export default function Message() {
  return (
    <center className="center">
      <h1>No Post Available</h1>
      <button type="button" className="btn btn-primary">
        Get Posts from server
      </button>
    </center>
  );
}
