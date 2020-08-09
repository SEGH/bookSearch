import React, { useState, useEffect } from "react";
import "materialize-css";
import { Icon } from "react-materialize";
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
            {books.length > 0 ? <Results books={books} /> : <section className="bookDiv"><Icon large >local_library</Icon><h4>No Saved Books</h4></section>}
        </main>
    );
}
