import React from "react";
import imageSuccess from '../icon-success.svg';

export default function AfterSubscribe ({ onDismiss }: any) {
    return (
        <div className="after-container">
            <div className="after-text">
                <img src={imageSuccess} className="image-success" alt="Success Image" />
                <h1 className="after-title">Thanks for subscribing!</h1>
                <p>A confirmation email has been sent to <span style={{fontWeight: 700}}>ash@loremcompany.com</span>. Please open it and click the button inside to confirm your subscription</p>
            </div>
            <button type="button" className="subscribe-button after" onClick={onDismiss}>Dismiss message</button>
        </div>
    )
}