import * as React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function RequestPopup({ show, handleClose, asset, showDetails }) {

    const [toShow, setShow] = useState(show);
    const handleClosee = () => setShow(handleClose);
    const [requestedAsset] = useState(asset);
    const [showAssetDetails] = useState(showDetails);

    function requestAsset() {
        
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