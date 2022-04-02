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
    }, [user]);

    function deleteRequest(id, index) {
        setCancelId(id)
        setShow(true)
    }

    return (
        <div>
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
                    {allRequests ? allRequests.map((req, index) => {
                        console.table(req)
                        return (
                            <tr>
                                <td>{req.deviceName}</td>
                                <td><button
                                    onClick={() => { deleteRequest(req.id, index) }}>
                                    Delete Request
                                </button></td>
                            </tr>
                        )
                    }) : ""}
                </tbody>
            </table>
        </div>
    )
}