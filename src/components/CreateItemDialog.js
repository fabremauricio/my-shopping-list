import React, { useState } from "react";

import Dialog from "./Dialog";
import Button from "./Button";
import TextInput from "./TextInput";

export default function CreateItemDialog({
  visible = true,
  onClose = () => {},
  onCreate = () => {},
}) {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

  function createItem() {
    if (title && subtitle) {
      onCreate({
        title,
        subtitle
      });
      setTitle('');
      setSubtitle('');
      onClose();
    }
  }

  return (
    <Dialog
      visible={visible}
      onClose={onClose}
      content={
        <>
          <div className="title">Add item to the list</div>
          <TextInput label="Title" value={title} onChange={setTitle} />
          <TextInput label="Subtitle" value={subtitle} onChange={setSubtitle} />
          <Button text="ADD" onClick={createItem} />
        </>
      }
    />
  );
}
