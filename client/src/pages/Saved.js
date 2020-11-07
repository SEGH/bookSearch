import React, { useState, useEffect } from "react";
import "materialize-css";
import { Icon } from "react-materialize";
import Results from "../components/Results";
import Banner from "../components/Banner";
import API from "../utils/API";

export default function Saved(props) {
    const [books, setBooks] = useState([]);
    const [booksLength, setBooksLength] = useState([books.length]);

    useEffect(() => {
        function loadBooks() {
            // console.log(props.user);
            if (props.user.id) {
                API.getSavedBooks(props.user.id)
                    .then(res => {
                        // console.log(res.data.books);
                        setBooks(res.data.books);

                    })
                    .catch(err => console.log(err));
            }
        };

        loadBooks();
    }, [props.user, booksLength]);

    return (
        <main className="container">
            <Banner />
            {books.length > 0 ? <Results books={books} booksLength={booksLength} setBooksLength={setBooksLength} loggedIn={props.loggedIn} /> : <section className="bookDiv"><Icon large >local_library</Icon><h4>No Saved Books</h4></section>}
        </main>
    );
}
