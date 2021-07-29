import React, { useState } from "react";
import "./Home.css";
import logo from "../resources/shopping-cart.png";
import Dialog from "../components/Dialog";
import Button from "../components/Button";
import ListItem from "../components/ListItem";
import CreateItemDialog from "../components/CreateItemDialog";
import CreateItemButton from "../components/CreateItemButton";

export default function Home() {
  const [dialog, setDialog] = useState(true);

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="header__text">My Shopping List</div>
        <div className="header__subtitle">Long press an item to delete it</div>
      </div>
      <div className="list-preview__wrapper">
        <ListItem />
        <CreateItemButton onClick={() => setDialog(true)}/>
        {<CreateItemDialog visible={dialog} onClose={() => setDialog(false)} />}
      </div>
    </div>
  );
}
