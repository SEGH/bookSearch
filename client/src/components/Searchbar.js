import React from "react";
import "materialize-css";
import { TextInput, Button } from "react-materialize";

export default function Searchbar(props) {
    return (
        <section className="z-depth-1">
            <h6>Book Search</h6>
            <TextInput placeholder="Book" onChange={props.handleInputChange} value={props.bookSearch} />
            <Button node="button" small className="z-depth-2 amber" onClick={props.handleSearch}>Search</Button>
        </section>
    );
}
