import React from "react";
import "materialize-css";
import { Link } from "react-router-dom";
import { Navbar } from "react-materialize";

export default function Header(props) {

    return (
        <Navbar brand={<Link className="brand-logo" to="/">Google Books</Link>} alignLinks="left" centerLogo className="deep-orange lighten-3">

            {props.loggedIn ? <Link to="/login" onClick={props.logoutUser}>Logout</Link> : <Link to="/login">Login</Link>}
            <Link to="/">Search</Link>
            {props.loggedIn ? <Link to="/saved">Saved</Link> : null}

        </Navbar>
    )
}
