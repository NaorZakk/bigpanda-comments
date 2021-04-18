import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { validateEmail, validateNotEmpty } from "../utils/validations";


function CommentForm(props) {
    const { addComment } = props;

    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(null);
    const [messageError, setMessageError] = useState(null);


    function handleEmailChange(e) {
        setEmail(e.target.value);
        setEmailError(null);
    }

    function handleMessageCahnge(e) {
        setMessage(e.target.value);
        setEmailError(null);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (validate()) {
            addComment(message, email);
            setMessage("");
            setEmail("");
        };
    }

    function validate() {
        let isValid = true

        if (!validateEmail(email)) {
            setEmailError("Email address is not valid");
            isValid = false;
        }

        if (!validateNotEmpty(email)) {
            setEmailError("Email address is required");
            isValid = false;
        }

        if (!validateNotEmpty(message)) {
            setMessageError("Message content is required");
            isValid = false;
        }

        return isValid;
    }

    return (
        <form dir="rtl">
            <TextField
                label="Email"
                value={email}
                onChange={handleEmailChange}
                margin="normal"
                variant="outlined"
                fullWidth={true}
                helperText={emailError}
                error={emailError}

            />

            <TextField
                label="Message"
                multiline
                rows="4"
                value={message}
                onChange={handleMessageCahnge}
                margin="normal"
                variant="outlined"
                fullWidth={true}
                helperText={messageError}
                error={messageError}

            />
            <Button submit variant="contained" color="primary" onClick={handleSubmit}>
                Submit
        </Button>
        </form>

    )
};

export default CommentForm;