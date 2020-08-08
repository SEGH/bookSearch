import React from "react";
import "materialize-css";
import { CollectionItem, Button, Row, Col } from "react-materialize";
import API from "../utils/API";

export default function ResultItem(props) {
    function saveBook() {
        console.log(props);
    }

    return (
        <CollectionItem>

            <Row>
                <Col><h6>{props.title}</h6><p>{props.authors}</p></Col>
                <Col><a href={props.link} className="btn">View</a></Col>
                <Col><Button onClick={ saveBook }>Save</Button></Col>
            </Row>
            <Row>
                <Col><img src={props.image}></img></Col>
                <Col><p>{props.description}</p></Col>
            </Row>

        </CollectionItem>
    );
}
