import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

export default function App() {
    return (
        <Router>
            <Header />
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
        </Router>
    );
}
