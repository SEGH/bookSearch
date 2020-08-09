import React, { useState } from "react";
import Searchbar from "../components/Searchbar";
import Results from "../components/Results";
import Banner from "../components/Banner";
import API from "../utils/API";

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
                setBookSearch(" ");
            });
    }

    return (
        <main className="container">
            <Banner />
            <Searchbar handleInputChange={handleInputChange} handleSearch={handleSearch} />
            <Results books={books} />
        </main>
    );
}