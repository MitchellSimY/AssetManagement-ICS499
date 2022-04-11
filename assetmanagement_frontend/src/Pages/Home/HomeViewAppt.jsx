import * as React from "react";
import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Components/UserContext";

export default function HomeViewAppts({ appointments }) {
    let navigate = useNavigate();
    const { user } = useContext(UserContext)

    const tableStyle = {
        paddingLeft: "3rem",
        paddingTop: "20rem",
        width: "40rem",
    }

    function handleApproveReq() {
        navigate("../ViewAllRequests")
    }

    function handleCancelRequest() {
        navigate("../ViewAllRequests")
    }

    return (
        <div>
            <table class="table table-hover" style={tableStyle}>
                <thead>
                    <tr>
                        <th scope="col">Appointment Date</th>
                        <th scope="col">Appointment Time</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments ? appointments.map((appts, index) => {
                        if (index >= 3) {
                            return
                        }
                        return (
                            <tr>
                                <td>{appts.requestedDate}</td>
                                <td>{appts.requestedTime}</td>

                                <td>
                                    <button onClick={handleCancelRequest}>Cancel Request
                                    </button>
                                </td>

                            </tr>
                        )
                    })
                        : ""}
                </tbody>
            </table>
            <Link to="/ViewAllAppointments">
                View all appointments..
            </Link>
        </div >
    )
}