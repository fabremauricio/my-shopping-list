import React from "react";

import Dialog from "./Dialog";
import Button from "./Button";
import TextInput from './TextInput';

export default function CreateItemDialog() {
  return (
    <Dialog
      content={
        <>
          <div className="title">Add item to the list</div>
          <TextInput/>
          <Button text="ADD" />
        </>
      }
    />
  );
}
