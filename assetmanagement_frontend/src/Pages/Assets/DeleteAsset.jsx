import * as React from "react";
import { useState, useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { UserContext } from "../../Components/UserContext";

export default function DeleteAsset({ showDeletePop, handleCloseDelete, asset, showDetails }) {

    const [toShow, setShow] = useState(showDeletePop);
    const handleClosee = () => setShow(handleCloseDelete);
    const [requestedAsset] = useState(asset);
    const [showAssetDetails] = useState(showDetails);

    const { user } = useContext(UserContext);

    function requestAsset() {
        var deviceId = requestedAsset.id
        var requestorId = user.id
        var deviceName = asset.deviceName
        var requestorName = user.firstName + " " + user.lastName;

        const request = {deviceId, requestorId, deviceName, requestorName}
        console.table(request)

        fetch(`http://localhost:8080/asset/delete/${request.deviceId}`, {
            method: "delete",
        })
            .then(response => response.json())
            .then(data => {
            });


            handleClosee()
    }

    return (

        <div>
            {showAssetDetails ?

                // Showing info
                <Modal show={toShow} onHide={handleClosee}>
                    <Modal.Header closeButton>
                        <Modal.Title>{asset.deviceName}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{asset.deviceDescription}</Modal.Body>
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
                        <Modal.Title>Delete Asset</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to delete {requestedAsset.asset}? Device ID: {asset.deviceId}</Modal.Body>
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