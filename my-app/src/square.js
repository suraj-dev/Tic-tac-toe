import "./index.css";
import React from "react";

export const Square = function(props) {
    return (
      <button
        onClick={() => {
          props.onClick();
        }}
        className="square"
      >
        {props.value}
      </button>
    );
}