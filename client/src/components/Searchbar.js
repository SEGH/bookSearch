import React from "react";
import "materialize-css";
import { TextInput, Button } from "react-materialize";

export default function Searchbar() {
    return (
        <section>
            <h6>Book Search</h6>
            <TextInput placeholder="Book" />
            <Button node="button">Search</Button>
        </section>
    );
}
