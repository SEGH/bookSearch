import React, { useState } from "react";
import "materialize-css";
import { Icon } from "react-materialize";
import Searchbar from "../components/Searchbar";
import Results from "../components/Results";
import Banner from "../components/Banner";
import API from "../utils/API";

export default function Search(props) {
    const [books, setBooks] = useState([]);

    const [bookSearch, setBookSearch] = useState("");

    const handleInputChange = event => {
        const { value } = event.target;

        setBookSearch(value);
    }

    const handleSearch = event => {
        event.preventDefault();
        console.log(bookSearch);
        API.getBooks(bookSearch)
            .then(res => {
                console.log(res.data.items);
                setBooks(res.data.items);
                setBookSearch(" ");
            });
    }

    return (
        <main className="container">
            <Banner />
            <Searchbar handleInputChange={handleInputChange} handleSearch={handleSearch} bookSearch={bookSearch} />
            {books.length > 0 ? <Results books={books} userId={props.userId} /> : <section className="bookDiv"><Icon large center >menu_book</Icon></section> }
        </main>
    );
}
