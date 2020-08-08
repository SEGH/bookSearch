import React from "react";
import "materialize-css";
import { Collection, CollectionItem, Button } from "react-materialize";
import ResultItem from "./ResultItem";

export default function Results(props) {
    return (
        <section>
            <h6>Results</h6>
            <Collection>
                {props.books.map(book => <ResultItem title={book.title} authors={book.authors} image={book.image} description={book.description} />)}
            </Collection>
        </section>
    );
}
