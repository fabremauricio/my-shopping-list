import React from 'react'
import './Dialog.css';

export default function Dialog({content}) {
    return (
        <>
        <div className="dialog-background"></div>
        <div className="dialog">
            <div className="dialog-bar"></div>
            {content}
        </div>
        </>
    )
}
