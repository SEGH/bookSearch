import React from "react";
import "materialize-css";
import { Collection } from "react-materialize";
import ResultItem from "./ResultItem";

export default function Results(props) {
    return (
        <section className="z-depth-1">
            <h6>Results</h6>
            <Collection>
                {props.books.map(book => <ResultItem title={book.volumeInfo.title} authors={book.volumeInfo.authors.join(", ")} image={book.volumeInfo.imageLinks.smallThumbnail} description={book.volumeInfo.description} link={book.volumeInfo.infoLink} />)}
            </Collection>
        </section>
    );
}
