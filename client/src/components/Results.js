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

                        return <ResultItem title={book.volumeInfo.title}
                            authors={book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : book.volumeInfo.authors}
                            image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : book.volumeInfo.image}
                            description={book.volumeInfo.description}
                            link={book.volumeInfo.infoLink}
                            key={book.id} userId={props.userId} loggedIn={props.loggedIn} />
                    } else {
                        return <ResultItem title={book.title}
                            authors={book.authors ? book.authors.join(", ") : book.authors}
                            image={book.image}
                            description={book.description}
                            link={book.link}
                            key={book._id}
                            id={book._id} loggedIn={props.loggedIn} booksLength={props.booksLength} setBooksLength={props.setBooksLength} />
                    }
                }
                )}
            </Collection>
        </section>
    );
}
