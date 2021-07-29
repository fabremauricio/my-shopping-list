import React from "react";

import Dialog from "./Dialog";
import Button from "./Button";
import TextInput from "./TextInput";

export default function CreateItemDialog({ onClose, visible = true }) {
  return (
    <Dialog
      visible={visible}
      onClose={onClose}
      content={
        <>
          <div className="title">Add item to the list</div>
          <TextInput />
          <Button text="ADD" />
        </>
      }
    />
  );
}
