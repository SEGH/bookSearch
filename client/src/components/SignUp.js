import React, { useState } from "react";
import "materialize-css";
import { TextInput, Button } from "react-materialize";
import API from "../utils/API";

export default function SignUp(props) {
    const [signUpForm, setSignUpForm] = useState({
        email: "",
        password: ""
    });

    const handleInputChange = event => {
        const { value } = event.target;
        const { name } = event.target;

        setSignUpForm({
            ...signUpForm,
            [name]: value
        });
    }

    const handleFormSubmit = event => {
        event.preventDefault();

        API.createUser(signUpForm)
            .then(res => {
                console.log("User created")
            })
            .catch(err => console.log(err));
    }

    return (
        <section id="signup" className="center z-depth-1 login">
            <form action="/" onSubmit={handleFormSubmit} method="post">
                <TextInput onChange={handleInputChange} email label="Email" placeholder="name@test.com" icon="account_circle" error="Something's not right..." success="Looks good!" name="email" />
                <TextInput onChange={handleInputChange} password label="Password" placeholder="password1234" icon="vpn_key" error="Something's not right..." success="Looks good!" name="password" />
                <Button type="submit" large waves="yellow" className="amber z-depth-2">Sign Up</Button>
                <p onClick={props.toggleForm}> Or Login</p>
            </form>
        </section>
    )
}