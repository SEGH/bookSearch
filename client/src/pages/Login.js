import React, { useState } from "react";
import "materialize-css";
import Banner from "../components/Banner";
import LoginInput from "../components/LoginInput";
import SignUp from "../components/SignUp";

export default function Login() {
    const [user, setUser] = useState(true);
    const toggleForm = () => setUser(!user);

    return (
        <main className="container">
            <Banner />
            {user ? <LoginInput toggleForm={toggleForm} /> : <SignUp toggleForm={toggleForm} />}
        </main>
    )
}