import React from "react";

import Dialog from "./../../../ui-components/dialog";
import Button from "./../../../ui-components/button";

import { ActionCreators } from "../../../redux/actions";
import { useDispatch } from "react-redux";

export default function CreateItemDialog({
  id,
  visible = true,
  onClose = () => {},
}) {
  const dispatch = useDispatch();

  function deleteItem() {
    dispatch(ActionCreators.DeleteItem(id));
    onClose();
  }

  return (
    <Dialog
      visible={visible}
      onClose={() => onClose()}
      content={
        <>
          <div className="title">Do you want to delete this item?</div>
          <Button text="DELETE" isDelete={true} onClick={deleteItem} />
        </>
      }
    />
  );
}
