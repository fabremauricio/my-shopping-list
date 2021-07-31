import React from "react";
import "./Button.css";

export default function Button({
  onClick,
  text,
  isDelete
}) {
  return (
    <button onClick={onClick} type="button" className={isDelete? 'button__delete' : ''}>
      {text}
    </button>
  );
}
