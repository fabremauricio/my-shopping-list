import React from 'react'
import './CreateItemButton.css';

export default function CreateItemButton({onClick}) {
    return (
        <button className="create-item-wrapper" onClick={onClick}>
            <span>Add item</span>
        </button>
    )
}
