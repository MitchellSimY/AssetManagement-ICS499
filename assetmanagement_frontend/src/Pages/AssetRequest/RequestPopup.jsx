import * as React from "react";
import { useState } from "react";
import { UserContext } from "../../Components/UserContext";
import { Button, Modal } from "react-bootstrap";

export default function RequestPopup({ show, handleClose, asset, showDetails }) {

    const [toShow, setShow] = useState(show);
    const handleClosee = () => setShow(handleClose);
    const [requestedAsset, setRequestedAsset] = useState(asset);
    const [showAssetDetails, setShowAssetDetails] = useState(showDetails);

    function gang() {
        console.table(requestedAsset);
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
                        <Modal.Title>REQuesting</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClosee}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClosee}>
                            Request
                        </Button>
                        <Button variant="warning" onClick={gang}>
                            click this bitch
                        </Button>
                    </Modal.Footer>
                </Modal>

            }

        </div>
    )
}