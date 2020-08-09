import React, { useState, useEffect } from "react";
import Results from "../components/Results";
import Banner from "../components/Banner";
import API from "../utils/API";

export default function Saved() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks()
    }, [books]);

    function loadBooks() {
        API.getSavedBooks()
            .then(res => {
                // console.log(res.data);
                setBooks(res.data);
            })
            .catch(err => console.log(err));
    };

    return (
        <main className="container">
            <Banner />
            <Results books={books} />
        </main>
    );
}
