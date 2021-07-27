import React from "react";
import './Button.css';

export default function Button({ onClick, text }) {
  return (
    <button onClick={onClick} type="button">
      {text}
    </button>
  );
}
