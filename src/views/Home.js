import React from "react";
import "./Home.css";
import logo from "../resources/shopping-cart.png";
import Dialog from '../components/Dialog';
import Button from '../components/Button';
import ListItem from '../components/ListItem';
import CreateItemDialog from '../components/CreateItemDialog';

export default function Home() {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="header__text">My Shopping List</div>
        <div className="header__subtitle">
          Long press an item to delete it
        </div>
      </div>
      <div className="list-preview__wrapper">

        <ListItem/>
      </div>

<CreateItemDialog></CreateItemDialog>
  
      {/* <Dialog content={

<Button text="ADD" onClick={(e) => console.log(e)}/>
      }/> */}
    </div>
  );
}
