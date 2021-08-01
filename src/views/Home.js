import React, { useState } from "react";
import "./Home.css";

import { useSelector } from "react-redux";

import ListItem from "../components/ListItem";
import CreateItemDialog from "../components/CreateItemDialog";
import CreateItemButton from "../components/CreateItemButton";

export default function Home() {
  const items = useSelector((state) => state.items);
  const [dialog, setDialog] = useState(false);

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="header__text">My Shopping List</div>
        <div className="header__subtitle">Long press an item to delete it</div>
      </div>
      <div className="list-preview__wrapper">
        {items.map((e) => (
          <ListItem key={e.id} title={e.title} subtitle={e.subtitle} id={e.id}/>
        ))}
        <CreateItemButton onClick={() => setDialog(true)} />
        <CreateItemDialog visible={dialog} onClose={() => setDialog(false)} />
      </div>
    </div>
  );
}
