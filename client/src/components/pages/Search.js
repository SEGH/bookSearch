import React, { useState } from "react";
import Searchbar from "../Searchbar";
import "materialize-css";
import { Collection } from "react-materialize";
import Results from "../Results";
import ResultItem from "../ResultItem";
import API from "../../utils/API";

export default function Search() {
    const [books, setBooks] = useState([]);

    const [bookSearch, setBookSearch] = useState("");

    const handleInputChange = event => {
        const { value } = event.target;

        setBookSearch(value);
    }

    const handleSearch = event => {
        event.preventDefault();
        API.getBooks(bookSearch)
            .then(res => {
                console.log(res.data.items);
                setBooks(res.data.items);
            });
    }

    return (
        <main className="container">
            <Searchbar handleInputChange={handleInputChange} handleSearch={handleSearch} />
            <Results books={books} />
        </main>
    );
}
