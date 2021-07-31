import React from "react";

import Dialog from "./Dialog";
import Button from "./Button";

export default function CreateItemDialog({
  visible = true,
  onClose = () => {},
  onDelete = () => {},
}) {
  return (
    <Dialog
      visible={visible}
      onClose={() => onClose()}
      content={
        <>
          <div className="title">Do you want to delete this item?</div>
          <Button
            text="DELETE"
            isDelete={true}
            onClick={() => {
              onDelete();
              onClose();
            }}
          />
        </>
      }
    />
  );
}
