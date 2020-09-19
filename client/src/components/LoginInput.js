import React from "react";
import "materialize-css";
import { TextInput, Button } from "react-materialize";

export default function LoginInput(props) {
    return (
        <section className="center z-depth-1 login">
            <TextInput email label="Email" placeholder="name@test.com" icon="account_circle" error="Something's not right..." success="Looks good!" validate />
            <TextInput password label="Password" placeholder="password1234" icon="vpn_key" error="Something's not right..." success="Looks good!" validate />
            <Button large waves="yellow" className="z-depth-2 amber">Login</Button>
            <p onClick={props.toggleForm}>Or Sign Up</p>
        </section>
    )
}