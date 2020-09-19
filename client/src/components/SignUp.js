import React from "react";
import "materialize-css";
import { TextInput, Button } from "react-materialize";

export default function SignUp(props) {
    return (
        <section id="signup" className="center z-depth-1 login">
            <form action="/signup" method="post">
                <TextInput email label="Email" placeholder="name@test.com" icon="account_circle" error="Something's not right..." success="Looks good!" validate />
                <TextInput password label="Password" placeholder="password1234" icon="vpn_key" error="Something's not right..." success="Looks good!" validate />
                <Button type="submit" large waves="yellow" className="amber z-depth-2">Sign Up</Button>
                <p onClick={props.toggleForm}> Or Login</p>
            </form>
        </section>
    )
}