import * as React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function RequestPopup({ show, handleClose, allRequests, id, index, setAllRequests}) {

    const [toShow, setShow] = useState(show);
    const handleClosee = () => setShow(handleClose);
    const [deleteId] = useState(id);

    function delteRequest() {

        const allRequestsArray = [...allRequests];
        console.log(deleteId)
        fetch(`http://localhost:8080/assetRequest/delete/${deleteId}`, {
            method: "DELETE"
        }).then(() => {
            console.log("Deleted request")
        });
        allRequestsArray.splice(index, 1)
        setAllRequests(allRequestsArray)
        handleClosee()
    }

    return (

        <div>
            <Modal show={toShow} onHide={handleClosee}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Choice</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to remove this request from your account?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClosee}>
                        Nevermind
                    </Button>
                    <Button variant="primary" onClick={delteRequest}>
                        Remove this thang!
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}