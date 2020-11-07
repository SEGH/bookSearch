import React from "react";
import "materialize-css";
import { TextInput, Button } from "react-materialize";

export default function SignUp(props) {

    return (
        <section id="signup" className="center z-depth-1 login">
            <form action="/" onSubmit={props.handleSignupSubmit} method="post">
                <TextInput id="signupEmail" onChange={props.handleSignupInput} email required maxLength={100} label="Email" placeholder="name@test.com" icon="account_circle" error="Something's not right..." success="Looks good!" validate name="email" />
                <TextInput id="signupPassword" onChange={props.handleSignupInput} password required minLength={6} maxLength={20} label="Password" placeholder="password1234" icon="vpn_key" error="Something's not right..." success="Looks good!" validate name="password" />
                <Button type="submit" large waves="yellow" className="amber z-depth-2">Sign Up</Button>
                <p onClick={props.toggleForm}> Or Login</p>
            </form>
        </section>
    )
}