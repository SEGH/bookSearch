import React from "react";
import { useLocation } from "react-router-dom";
import "materialize-css";
import { Collection } from "react-materialize";
import ResultItem from "./ResultItem";

export default function Results(props) {
    const location = useLocation();

    return (
        <section className="z-depth-1">
            <h6>Results</h6>
            <Collection>
                {props.books.map(book => {
                    if (location.pathname === "/") {
                        book = book.volumeInfo;
                    }
                    return <ResultItem title={book.title} authors={book.authors.join(", ")} image={book.imageLinks ? book.imageLinks.smallThumbnail : book.image} description={book.description} link={book.infoLink ? book.infoLink : book.link} />
                }
                )}
            </Collection>
        </section>
    );
}
