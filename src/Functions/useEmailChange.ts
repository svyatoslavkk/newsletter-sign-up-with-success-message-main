import React, { useState } from "react";
import { validateEmail } from "./validateEmail";

export default function useEmailChange () {
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

    return { email, isValidEmail, isEmptyEmail, isButtonClicked };
}

    