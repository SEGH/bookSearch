import React from "react";
import "materialize-css";
import { Link } from "react-router-dom";
import { Navbar } from "react-materialize";

export default function Header(props) {

    return (
        <Navbar brand={<a className="brand-logo" href="/">Google Books</a>} alignLinks="left" centerLogo className="deep-orange lighten-3">

            <Link to="/">Search</Link>

            {props.loggedIn ? <Link to="/saved">Saved</Link> : null}

            {props.loggedIn ? <Link to= "/login">Logout</Link> : <Link to= "/login">Login</Link>}
        </Navbar>
    )
}
