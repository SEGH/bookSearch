import React, { useState } from "react";
import "materialize-css";
import Banner from "../components/Banner";
import LoginInput from "../components/LoginInput";
import SignUp from "../components/SignUp";

export default function Login(props) {
    const [user, setUser] = useState(true);
    const toggleForm = () => setUser(!user);

    return (
        <main className="container">
            <Banner />
            {props.loggedIn ? <p>Welcome, {props.user.email}!</p> : <p>please sign in</p>}
            {user ? <LoginInput toggleForm={toggleForm} handleLoginSubmit={props.handleLoginSubmit} handleLoginInput={props.handleLoginInput} />
                : <SignUp toggleForm={toggleForm} handleSignupSubmit={props.handleSignupSubmit} handleSignupInput={props.handleSignupInput} />}
        </main>
    )
}