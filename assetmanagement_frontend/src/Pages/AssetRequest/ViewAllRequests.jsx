import * as React from "react";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../Components/UserContext";
import Confirmation from "../AssetRequest/Confirmation.jsx"

export default function ViewAllRequests() {

    // Constants
    const { user } = useContext(UserContext)

    const [allRequests, setAllRequests] = useState()
    const [show, setShow] = useState(false);
    const [cancelId, setCancelId] = useState();
    const handleClose = () => setShow(false);

    const tableStyle = {
        textAlign: "center",
        paddingLeft: "30rem",
        paddingTop: "50rem",
        width: "60rem",
        margin: "auto",
    }

    useEffect(() => {
        fetch(`http://localhost:8080/assetRequest/getUsersRequests/${user ? user.id : null}`)
            .then((res) => res.json())
            .then((result) => {
                setAllRequests(result.reverse());
            });
    });

    function deleteRequest(id) {
        setCancelId(id)
        setShow(true)
    }

    function approveRequest(id) {
        fetch(`http://localhost:8080/assetRequest/approveRequest/${id}`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
        }).then(() => {
            console.log("Request approved!");
        });
    }

    return (
        <div>
            <h1 style={{textAlign: "center"}}>All User Requests</h1>
            {show ?
                <Confirmation
                    show={show}
                    handleClose={handleClose}
                    allRequests={allRequests}
                    setAllRequests={setAllRequests}
                    id={cancelId}
                /> : ""}
            <br />
            <table class="table table-hover" style={tableStyle}>
                
                <thead>
                    <tr>
                        <th scope="col">Asset Name</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allRequests ? allRequests.map((req) => {
                        console.table(req)
                        return (
                            <tr>
                                <td>{req.deviceName}</td>

                                {user?.isAdmin ?
                                    <td>
                                        <button class="btn btn-primary"
                                            onClick={() => { approveRequest(req.id) }}>
                                            Approve Request
                                        </button>
                                    </td>
                                    : null}

                                    <td>
                                    <button class="btn btn-danger"
                                            onClick={() => { deleteRequest(req.id) }}>
                                            Delete Request
                                        </button>
                                    </td>
                            </tr>
                        )
                    }) : ""}
                </tbody>
            </table>
        </div>
    )
}