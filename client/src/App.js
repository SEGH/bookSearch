import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import API from "./utils/API";

export default function App() {
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    });

    const handleLoginInput = event => {
        const { value } = event.target;
        const { name } = event.target;

        setLoginForm({
            ...loginForm,
            [name]: value
        });
    }

    const handleLoginSubmit = event => {
        event.preventDefault();

        API.loginUser(loginForm)
            .then(res => {
                console.log("Logging in...")
                console.log(res);
            })
            .catch(err => console.log(err));
    }

    const [signUpForm, setSignUpForm] = useState({
        email: "",
        password: ""
    });

    const handleSignupInput = event => {
        const { value } = event.target;
        const { name } = event.target;

        setSignUpForm({
            ...signUpForm,
            [name]: value
        });
    }

    const handleSignupSubmit = event => {
        event.preventDefault();

        API.createUser(signUpForm)
            .then(res => {
                console.log("User created")
            })
            .catch(err => console.log(err));
    }

    return (
        <Router>
            <Header />
            <Route exact path="/" render={(props) => ( <Login {...props} handleLoginSubmit={handleLoginSubmit} handleLoginInput={handleLoginInput} handleSignupInput={handleSignupInput} handleSignupSubmit={handleSignupSubmit} />)} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
        </Router>
    );
}
