import React from "react";
import "materialize-css";
import Banner from "../components/Banner";
import LoginInput from "../components/LoginInput";

export default function Login() {
    return (
        <main className="container">
            <Banner />
            <LoginInput />
        </main>
    )
}