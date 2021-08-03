import React from "react";
import "./styles.css";

export default function TextInput({
  type = "text",
  label,
  value,
  onChange = () => {},
}) {
  return (
    <div className="input-wrapper">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      ></input>
      <label>{label}</label>
    </div>
  );
}
