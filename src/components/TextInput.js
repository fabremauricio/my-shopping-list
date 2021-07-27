import React from 'react'
import './TextInput.css';

export default function TextInput({type="text"}) {
    return (
        <div className="input-wrapper">
            <input type={type}></input>
            <label>Name</label>
        </div>
    )
}
