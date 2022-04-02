import * as React from "react";
import { useState, useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { UserContext } from "../../Components/UserContext";

export default function RequestPopup({ show, handleClose, asset, showDetails }) {

    const [toShow, setShow] = useState(show);
    const handleClosee = () => setShow(handleClose);
    const [requestedAsset] = useState(asset);
    const [showAssetDetails] = useState(showDetails);

    const { user } = useContext(UserContext);

    function requestAsset() {
        console.log("USER ID:  " +user.id)
        console.log("ASSET ID:  " + requestedAsset.id)
        var deviceId = requestedAsset.id
        var requestorId = user.id
        var deviceName = asset.deviceName

        const request = {deviceId, requestorId, deviceName}

        fetch("http://localhost:8080/assetRequest/add", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(request),
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    console.log("Successfully requested")
                    handleClosee()
                } else {
                    console.log("You aint add shit")
                }
            });
        
    }

    return (

        <div>
            {showAssetDetails ?

                // Showing info
                <Modal show={toShow} onHide={handleClosee}>
                    <Modal.Header closeButton>
                        <Modal.Title>{requestedAsset.deviceName}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{requestedAsset.deviceDescription}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClosee}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                :

                // Show info
                <Modal show={toShow} onHide={handleClosee}>
                    <Modal.Header closeButton>
                        <Modal.Title>Requesting</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Would you like to place a request for {requestedAsset.deviceName}?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClosee}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={requestAsset}>
                            Confirm Request
                        </Button>
                    </Modal.Footer>
                </Modal>

            }

        </div>
    )
}