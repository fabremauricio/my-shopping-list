import React from "react";
import "./styles.css";

export default function Button({ onClick, text, isDelete }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={isDelete ? "button__delete" : ""}
    >
      {text}
    </button>
  );
}
