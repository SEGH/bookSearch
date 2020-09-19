import React from "react";
import "materialize-css";
import { TextInput } from "react-materialize";

export default function LoginInput() {
    return (
        <section id="login" className="center z-depth-1">
            <h4>Login</h4>
            <TextInput email label="Email" placeholder="name@test.com" icon="account_circle" error="Something's not right..." success="Looks good!" validate />
            <TextInput password label="Password" placeholder="password1234" icon="vpn_key" error="Something's not right..." success="Looks good!" validate />
        </section>
    )
}