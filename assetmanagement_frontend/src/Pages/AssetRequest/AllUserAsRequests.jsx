import * as React from "react";
import { useState, useEffect } from "react";

export default function AllUserAsRequests() {

    const [allReqs, setAllReqs] = useState();
    const [showDenialConfrmation, setShowDentialConfirmation] = useState(false)

    const tableStyle = {
        textAlign: "center",
        paddingLeft: "30rem",
        paddingTop: "50rem",
        width: "60rem",
        margin: "auto",
    }

    useEffect(() => {
        fetch(`http://localhost:8080/assetRequest/getAllReqs`, {
            method: "GET",
            headers: { "Content-type": "application/json" },
        }).then((res) => res.json())
            .then((result) => {
                setAllReqs(result);
            });
    });

    function handleApprove(reqId) {

        fetch(`http://localhost:8080/assetRequest/approveRequest/${reqId}`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
        }).then(() => {
            console.log("New asset added!");
        });


        console.log("Approved")
    }

    function handleDeny(reqId) {
        console.log(reqId)
        setShowDentialConfirmation(true)
        fetch(`http://localhost:8080/assetRequest/delete/${reqId}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" },
        }).then(() => {
            console.log("Asset Request Deleted");
        });
    }

    return (
        <div>
            <br />
            {showDenialConfrmation ? <div class="alert alert-dark" role="alert">
                An email has since been seent to the user regarding the denial of their assset.
            </div> : null}
            <table class="table table-hover" style={tableStyle}>
                
                <thead>
                    <tr>
                        <th scope="col">Requestor</th>
                        <th scope="col">Asset Name</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>

                <tbody>
                <br />
                    {allReqs ? allReqs.map((req, index) => {
                        return (
                            <tr>
                                <td>{req.requestorName}</td>
                                <td>{req.deviceName}</td>
                                <td>
                                    <button class="btn btn-primary" onClick={() => { handleApprove(req.id) }}>Approve</button> {" "}

                                    <button class="btn btn-danger" onClick={() => { handleDeny(req.id) }}>Deny</button>
                                </td>
                            </tr>
                        )
                    }) : null}
                </tbody>
            </table>
        </div>
    )
}