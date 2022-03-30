import * as React from "react";
import { Card, Button } from "react-bootstrap"

export default function BulletinCards({title, announcementType, bulletinText, bulletinId}) {

    function deleteBulletin() {
        fetch(`http://localhost:8080/bulletin/delete/${bulletinId}`, {
            method: "DELETE"
        }).then(() => {
            console.log("Deleted bulletin")
        });
    }

    return (
        <Card style={{ width: '18rem'}}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <h6>{announcementType}</h6>
                <Card.Text>
                    {bulletinText}
                    <br />
                    <button class="btn btn-light" onClick={deleteBulletin}>Delete</button>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}