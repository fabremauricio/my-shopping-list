import React, { useState } from "react";
import "./ListItem.css";

import DeleteItemDialog from "./DeleteItemDialog";

export default function ListItem({
  title = "Title",
  subtitle = "Subtitile 12313",
  onDelete = () => {},
}) {
  const [dialog, setDialog] = useState(false);

  return (
    <>
      <div
        className="item-wrapper"
        onContextMenu={(e) => {
          e.preventDefault();
          setDialog(true);
        }}
      >
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
      <DeleteItemDialog
        visible={dialog}
        onClose={() => setDialog(false)}
        onDelete={() => onDelete()}
      /> 
    </>
  );
}
