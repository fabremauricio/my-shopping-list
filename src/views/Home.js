import React, { useState, useEffect } from "react";
import "./Home.css";

import ListItem from "../components/ListItem";
import CreateItemDialog from "../components/CreateItemDialog";
import CreateItemButton from "../components/CreateItemButton";

import { v4 as uuid } from "uuid";

const ITEMS_KEY = "items";

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

  function deleteItem(id) {
    console.log(`Delete called ${id}`);
    setItems((ls) => ls.filter((e) => e.id !== id));
  }

  function createItem({ title, subtitle }) {
    const item = { title, subtitle, id: uuid() };
    setItems((ls) => [...ls, item]);
  }

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="header__text">My Shopping List</div>
        <div className="header__subtitle">Long press an item to delete it</div>
      </div>
      <div className="list-preview__wrapper">
        {items.map((e) => (
          <ListItem
            key={e.id}
            title={e.title}
            subtitle={e.subtitle}
            onDelete={() => deleteItem(e.id)}
          />
        ))}
        <CreateItemButton onClick={() => setDialog(true)} />
        <CreateItemDialog
          visible={dialog}
          onClose={() => setDialog(false)}
          onCreate={(e) => createItem(e)}
        />
      </div>
    </div>
  );
}
