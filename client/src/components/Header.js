import React from "react";
import "materialize-css";
import { Link, useLocation } from "react-router-dom";
import { Navbar } from "react-materialize";

export default function Header() {
    const location = useLocation();

    return (
        <Navbar brand={<a className="brand-logo" href="/">Google Books</a>} alignLinks="left" centerLogo>

            <Link to="/">Search</Link>

            <Link to="/saved">Saved</Link>

        </Navbar>
    )
}
