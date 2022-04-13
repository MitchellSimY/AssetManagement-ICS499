import * as React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Components/UserContext";

export default function HomeViewReqs({ requests }) {
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

                                {user?.isAdmin ?
                                    <td>
                                        <button class="btn btn-success"  onClick={handleApproveReq}>Approve</button>
                                    </td>
                                    : null}

                                <td>
                                    <button class="btn btn-warning"  onClick={handleCancelRequest}>Cancel Request
                                    </button>
                                </td>

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