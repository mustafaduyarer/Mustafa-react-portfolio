import React from "react"; //functional componenet

export default function (props) {
  return (
    <div>
      <h3>Portfolio Item goes here</h3>
      <h3> {props.title}</h3>
      <h4>{props.url}</h4>
    </div>
  );
}
