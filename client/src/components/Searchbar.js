import React from "react";
import "materialize-css";
import { TextInput, Button } from "react-materialize";

export default function Searchbar(props) {
    return (
        <section>
            <h6>Book Search</h6>
            <TextInput placeholder="Book" onChange={props.handleInputChange} />
            <Button node="button" onClick={props.handleSearch}>Search</Button>
        </section>
    );
}
