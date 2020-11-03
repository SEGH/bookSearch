import React, { useState, useEffect, useReducer } from "react";
import "materialize-css";
import { Icon } from "react-materialize";
import Results from "../components/Results";
import Banner from "../components/Banner";
import API from "../utils/API";

export default function Saved(props) {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        function loadBooks() {
            console.log(props.userId);
            API.getSavedBooks(props.userId)
                .then(res => {
                    console.log(res.data.books);
                    setBooks(res.data.books);
    
                })
                .catch(err => console.log(err));
        };

        loadBooks();
    }, [props.userId]);

    return (
        <main className="container">
            <Banner />
            {books.length > 0 ? <Results books={books} loggedIn={props.loggedIn} /> : <section className="bookDiv"><Icon large >local_library</Icon><h4>No Saved Books</h4></section>}
        </main>
    );
}
