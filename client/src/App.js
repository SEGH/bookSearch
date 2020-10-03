import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import API from "./utils/API";

export default function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    const [user, setUser] = useState({
        email: "",
        id: ""
    });

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
                setUser({
                    email: res.data.email,
                    id: res.data.id
                });
                setLoggedIn(true);
                // window.location.href = "./";
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
            <Header loggedIn={loggedIn} />
            <Route exact path="/login" render={(props) => ( <Login {...props} handleLoginSubmit={handleLoginSubmit} handleLoginInput={handleLoginInput} handleSignupInput={handleSignupInput} handleSignupSubmit={handleSignupSubmit} loggedIn={loggedIn} user={user} />)} />
            <Route exact path="/" render={(props) => ( <Search {...props} userId={user.id} />)} />
            <Route exact path="/saved" render={(props) => ( <Saved {...props} userId={user.id} />)} />
        </Router>
    );
}
