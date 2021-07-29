import React from "react";
import './ListItem.css';

export default function ListItem({
  title = "Title",
  subtitle = "Subtitile 12313",
  onLongPress = () => {}
}) {
  return (
    <div className="item-wrapper">
      <div className="content-wrapper">
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </div>
      <div className="drag-indicator">
        <div className="drag-circle"></div>
        <div className="drag-circle"></div>
        <div className="drag-circle"></div>
        <div className="drag-circle"></div>
        <div className="drag-circle"></div>
        <div className="drag-circle"></div>
      </div>
    </div>
  );
}
