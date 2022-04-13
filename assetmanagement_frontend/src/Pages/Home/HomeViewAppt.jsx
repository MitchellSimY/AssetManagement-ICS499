import * as React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function HomeViewAppt({ appointments }) {
    let navigate = useNavigate();

    const tableStyle = {
        paddingLeft: "3rem",
        paddingTop: "20rem",
        width: "40rem",
    }

    function handleCancelRequest() {
        navigate("../ViewAllAppointments")
    }

    function isApptInvalid(appts) {
        var today = new Date()
        const appointmentDate = Date.parse(appts.requestedDate)
        console.log()
        console.log(appointmentDate)

        if (appointmentDate >= Date.parse(today)) {
            return false
        }
        return true
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
                        if (isApptInvalid(appts)) {
                            index--
                            return
                        }

                        if (index < 3) {
                            return
                        }
                        return (
                            <tr>
                                <td>{appts.requestedDate}</td>
                                <td>{appts.requestedTime}</td>

                                <td>
                                    <button class="btn btn-warning"  onClick={handleCancelRequest}>Cancel Appointment
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