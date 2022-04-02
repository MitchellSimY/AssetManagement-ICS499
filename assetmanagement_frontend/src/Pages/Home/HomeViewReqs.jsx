import * as React from "react";
import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function HomeViewReqs({ requests }) {
    let navigate = useNavigate();
    const tableStyle = {
        paddingLeft: "3rem",
        paddingTop: "20rem",
        width: "40rem",
    }


    function handleCancelRequest() {
        navigate("../ViewAllRequests")
    }

    return (
        <div>
            <table class="table table-hover" style={tableStyle}>
                <thead>
                    <tr>
                        <th scope="col">Asset Name</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>


                    {requests ? requests.map((reqs, index) => {
                        if (index >= 3) {
                            return
                        }
                        return (
                            <tr>
                                <td>{reqs.deviceName}</td>
                                <td><button onClick={handleCancelRequest}>Cancel Request</button></td>
                            </tr>
                        )
                    })
                        : ""}
                </tbody>
            </table>
            <Link to="/ViewAllRequests">
                View all asset requests..
            </Link>
        </div >
    )
}