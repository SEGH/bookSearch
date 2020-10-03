import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "materialize-css";
import Banner from "../components/Banner";
import LoginInput from "../components/LoginInput";
import SignUp from "../components/SignUp";

export default function Login(props) {
    const [user, setUser] = useState(true);
    const toggleForm = () => setUser(!user);

    if (props.loggedIn) {
        return <Redirect to="/" />
    }

    return (
        <main className="container">
            <Banner />
            {user ? <LoginInput toggleForm={toggleForm} handleLoginSubmit={props.handleLoginSubmit} handleLoginInput={props.handleLoginInput} />
                : <SignUp toggleForm={toggleForm} handleSignupSubmit={props.handleSignupSubmit} handleSignupInput={props.handleSignupInput} />}
        </main>
    )
}