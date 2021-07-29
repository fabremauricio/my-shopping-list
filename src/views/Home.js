import React, { useState, useEffect } from "react";
import "./Home.css";
import logo from "../resources/shopping-cart.png";
import Dialog from "../components/Dialog";
import Button from "../components/Button";
import ListItem from "../components/ListItem";
import CreateItemDialog from "../components/CreateItemDialog";
import CreateItemButton from "../components/CreateItemButton";

const ITEMS_KEY = 'items';

export default function Home() {
  const [dialog, setDialog] = useState(false);
  const [items, setItems] = useState([]);

  // Load
  useEffect(() => {
    const data = localStorage.getItem(ITEMS_KEY) || "[]";
    setItems(JSON.parse(data));
  }, []);
  // Save
  useEffect(() => {
    const data = JSON.stringify(items);
    localStorage.setItem(ITEMS_KEY, data);
  }, [items]);

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="header__text">My Shopping List</div>
        <div className="header__subtitle">Long press an item to delete it</div>
      </div>
      <div className="list-preview__wrapper">
        {items.map((e) => (
          <ListItem key={e.id} title={e.title} subtitle={e.subtitle} />
        ))}
        <CreateItemButton onClick={() => setDialog(true)} />
        <CreateItemDialog
          visible={dialog}
          onClose={() => setDialog(false)}
          onCreate={(e) => setItems((ls) => [...ls, e])}
        />
      </div>
    </div>
  );
}
