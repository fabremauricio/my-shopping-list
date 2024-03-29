import React, { useState } from "react";

import Dialog from "../../../ui-components/dialog";
import Button from "../../../ui-components/button";
import TextInput from "../../../ui-components/text-input";

import { useDispatch } from "react-redux";
import { ActionCreators } from "../../../redux/actions";

export default function CreateItemDialog({
  visible = true,
  onClose = () => {},
}) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

  function createItem() {
    if (title && subtitle) {
      dispatch(
        ActionCreators.CreateItem(
          title,
          subtitle,
        )
      );
      setTitle("");
      setSubtitle("");
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
