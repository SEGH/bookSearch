import React, { useState } from "react";
import Searchbar from "../Searchbar";
import Results from "../Results";

export default function Search() {
    const [books, setBooks] = useState([
        {
            title: "Test Book",
            authors: "SEGH",
            description: "A very good book indeed",
            image: "",
            link: ""
        }
    ]);

    return (
        <main className="container">
            <Searchbar />
            <Results books={books} />
        </main>
    );
}
