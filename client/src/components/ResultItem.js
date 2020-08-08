import React from "react";
import "materialize-css";
import { CollectionItem, Button, Row, Col } from "react-materialize";

export default function ResultItem(props) {
    return (
        <CollectionItem>

            <Row>
                <Col><h6>{props.title}</h6><p>{props.authors}</p></Col>
                <Col><Button>View</Button></Col>
                <Col><Button>Save</Button></Col>
            </Row>
            <Row>
                <Col><img src={props.image}></img></Col>
                <Col><p>{props.description}</p></Col>
            </Row>

        </CollectionItem>
    );
}
