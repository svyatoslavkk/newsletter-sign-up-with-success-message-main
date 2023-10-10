import React, { useState } from "react";
import illustrationSignUpMobile from '../illustration-sign-up-mobile.svg';
import illustrationSignUpDesktop from '../illustration-sign-up-desktop.svg'
import { listArray } from "../Data/listArray";
import { validateEmail } from "../Functions/validateEmail";

export default function MainPage ({ onSubscribe }: any) {
    const [email, setEmail] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isEmptyEmail, setIsEmptyEmail] = useState(false);
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const handleEmailChange = (e: any) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        if (newEmail.trim() === "") {
            setIsValidEmail(true);
            setIsEmptyEmail(true);
        } else {
            setIsEmptyEmail(false);
            setIsValidEmail(validateEmail(newEmail));
        }
        if (isValidEmail) {
            setIsButtonClicked(false);
        }
    };

    const handleSubscribeClick = () => {
        setIsButtonClicked(true);
        if (!isEmptyEmail && isValidEmail) {
            onSubscribe();
        }
    };

    return (
        <div className='container'>
            <img src={illustrationSignUpMobile} className="illustration-mobile" alt='Illustration Image' />
            <div className='content'>
                <h1 className='title'>Stay updated!</h1>
                <p className='main-desc'>Join 60,000+ product managers receiving monthly updates on:</p>
                <div className="list-block">
                    {listArray.map((item: any) => (
                    <div className='list'>
                        <img src={item.icon} className='icon-list' alt="Icon List" />
                        <p className='list-item'>{item.description}</p>
                    </div>
                    ))}
                </div>
                <div className="input-header">
                    <h4 className='email-title'>Email address</h4> 
                    {isButtonClicked ? (
                        <p className={`error-message ${isEmptyEmail || !isValidEmail ? "invalid" : isEmptyEmail
                        ? "empty"
                        : ""}`}>Valid email required</p>
                        ) : null}
                </div>
                <input 
                    className={`email-input ${
                        isButtonClicked && (isEmptyEmail || !isValidEmail)
                            ? "invalid"
                            : isEmptyEmail
                                ? "empty"
                                : ""
                    }`}
                    placeholder='email@company.com' 
                    value={email}
                    onChange={handleEmailChange}
                />
                <button 
                    type="button" 
                    className='subscribe-button'
                    onClick={handleSubscribeClick}
                >
                    Subscribe to monthly newsletter
                </button>
            </div>
            <img src={illustrationSignUpDesktop} className="illustration-desktop" alt='Illustration Image' />
        </div>
    )
}