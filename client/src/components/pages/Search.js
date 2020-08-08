import React from "react";
import Searchbar from "../Searchbar";
import Results from "../Results";

export default function Search() {
    return (
        <main className="container">
            <Searchbar />
            <Results />
        </main>
    );
}
