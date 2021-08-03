import React, { useState } from "react";
import "./styles.css";

import DeleteItemDialog from "./../delete-item-dialog";

export default function ListItem({ id, title, subtitle }) {
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
        id={id}
        onClose={() => setDialog(false)}
      />
    </>
  );
}
