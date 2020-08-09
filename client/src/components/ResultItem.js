import React from "react";
import { useLocation } from "react-router-dom";
import "materialize-css";
import { CollectionItem, Button, Row, Col } from "react-materialize";
import API from "../utils/API";

export default function ResultItem(props) {
    const location = useLocation();

    function saveBook(book) {
        console.log(book);

        API.saveBook(book)
            .then(res => {
                console.log("book saved!");
            })
            .catch(err => console.log(err));
    };

    function deleteBook(id) {
        console.log(id);
        API.deleteBook(id)
            .then(res => {
                console.log(`${id} deleted!`)
            })
            .catch(err => console.log(err));
    };

    return (
        <CollectionItem>

            <Row>
                <Col l={10}><h6>{props.title}</h6><p>{props.authors}</p></Col>
                <Col l={1}><a href={props.link} className="btn-small z-depth-2 amber">View</a></Col>
                <Col l={1}>
                    {location.pathname === "/" ? <Button small className="z-depth-2 amber" onClick={() => saveBook(props) }>Save</Button> : <Button small className="z-depth-2 red" onClick={ () => deleteBook(props.id) }>Delete</Button>}
                    </Col>
            </Row>
            <Row>
                <Col l={2}><img src={props.image}></img></Col>
                <Col l={10}><p>{props.description}</p></Col>
            </Row>

        </CollectionItem>
    );
}
