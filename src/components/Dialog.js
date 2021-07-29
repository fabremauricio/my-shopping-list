import React from 'react'
import './Dialog.css';

export default function Dialog({content,onClose,visible}) {
    const backgoundCss = `dialog-background dialog-background__${visible? 'in':'out'}`;
    const dialogCss = `dialog dialog__${visible? 'in':'out'}`;

    return (
        <>
        <div className={backgoundCss} onClick={onClose}></div>
        <div className={dialogCss}>
            <div className="dialog-bar"></div>
            {content}
        </div>
        </>
    )
}
