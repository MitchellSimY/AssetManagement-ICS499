import * as React from "react";
import { Card, Button } from "react-bootstrap"

export default function BulletinCards() {

    return (
        <Card style={{ width: '18rem'}}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <h6>Type of announcement</h6>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}