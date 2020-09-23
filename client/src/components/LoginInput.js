import React, { useState } from "react";
import "materialize-css";
import { TextInput, Button } from "react-materialize";
import API from "../utils/API";

export default function LoginInput(props) {
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    });

    const handleInputChange = event => {
        const { value } = event.target;
        const { name } = event.target;

        setLoginForm({
            ...loginForm,
            [name]: value
        });
    }

    const handleFormSubmit = event => {
        event.preventDefault();

        API.loginUser(loginForm)
            .then(res => {
                console.log("Logging in...")
                console.log(res);
            })
            .catch(err => console.log(err));
    }
    return (
        <section className="center z-depth-1 login">
            <form action="/login" method="post" onSubmit={handleFormSubmit}>
                <TextInput onChange={handleInputChange} email label="Email" placeholder="name@test.com" icon="account_circle" error="Something's not right..." success="Looks good!" validate name="email" />
                <TextInput onChange={handleInputChange} password label="Password" placeholder="password1234" icon="vpn_key" error="Something's not right..." success="Looks good!" validate name="password" />
                <Button type="submit" large waves="yellow" className="z-depth-2 amber">Login</Button>
                <p onClick={props.toggleForm}>Or Sign Up</p>
            </form>
        </section>
    )
}