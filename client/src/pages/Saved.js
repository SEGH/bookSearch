import React, { useState, useEffect, useReducer } from "react";
import "materialize-css";
import { Icon } from "react-materialize";
import Results from "../components/Results";
import Banner from "../components/Banner";
import API from "../utils/API";

export default function Saved(props) {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks(props.userId)
    }, []);

    function loadBooks(userId) {
        console.log(userId);
        API.getSavedBooks(userId)
            .then(res => {
                console.log(res.data.books);
                setBooks(res.data.books);

            })
            .catch(err => console.log(err));
    };

    return (
        <main className="container">
            <Banner />
            {books.length > 0 ? <Results books={books} loadBooks={loadBooks} loggedIn={props.loggedIn} /> : <section className="bookDiv"><Icon large >local_library</Icon><h4>No Saved Books</h4></section>}
        </main>
    );
}
