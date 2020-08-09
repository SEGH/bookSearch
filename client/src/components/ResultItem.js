import React from "react";
import { useLocation } from "react-router-dom";
import "materialize-css";
import { CollectionItem, Button, Row, Col } from "react-materialize";
import API from "../utils/API";

export default function ResultItem(props) {
    const location = useLocation();

    function saveBook() {
        console.log(props);
        API.saveBook(props)
            .then(res => {
                console.log("book saved!");
            })
            .catch(err => console.log(err));
    };

    function deleteBook() {
        console.log(props);
    }

    return (
        <CollectionItem>

            <Row>
                <Col l={10}><h6>{props.title}</h6><p>{props.authors}</p></Col>
                <Col l={1}><a href={props.link} className="btn-small z-depth-2 amber">View</a></Col>
                <Col l={1}>
                    {location.pathname === "/" ? <Button small className="z-depth-2 amber" onClick={ saveBook }>Save</Button> : <Button small className="z-depth-2 red" onClick={ deleteBook }>Delete</Button>}
                    </Col>
            </Row>
            <Row>
                <Col l={2}><img src={props.image}></img></Col>
                <Col l={10}><p>{props.description}</p></Col>
            </Row>

        </CollectionItem>
    );
}
