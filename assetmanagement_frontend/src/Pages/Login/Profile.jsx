import * as React from "react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Components/UserContext";

export default function Profile() {
    let navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const [allAssets, setAllAssets] = useState()


    const tableStyle = {
        paddingLeft: "15rem",
        paddingTop: "5rem",
        paddingRight: "30rem",
        width: "15rem",
    }

    // On page load
    useEffect(() => {
        fetch(`http://localhost:8080/asset/getUsersAssets/${user.id}`)
            .then((res) => res.json())
            .then((result) => {
                setAllAssets(result.reverse());
            });
    });

    function handleSignOut() {
        setUser();
        navigate("../")
    }

    return (
        <div style={{ paddingLeft: '5rem', paddingTop: "3em" }}>
            <div>
                <h2>Welcome, {user?.firstName} {user?.lastName}!</h2>

            </div>

            <br />
            <table class="table table-hover" style={tableStyle}>
                <thead>
                    <tr>
                        <th scope="col">User Information</th>
                    </tr>
                </thead>
                <tbody>
                    {/* User Data Here */}
                    <tr>
                        <td>User ID:</td>
                        <td>{user?.id}</td>
                    </tr>
                    <tr>
                        <td>Name:</td>
                        <td>{user?.firstName} {user?.lastName}</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>{user?.email}</td>
                    </tr>

                    <tr>
                        <td>Phone:</td>
                        <td>{user?.phone}</td>
                    </tr>
                </tbody>
            </table>

            <table class="table table-hover" style={{width: '30rem'}}>
                <tr>
                    <th>
                        Asset Name
                    </th>
                    <th>
                        Asset Type
                    </th>
                </tr>
                <tbody > 
                    {allAssets ? allAssets.map(asset => {

                        return (
                            <tr>
                                <td>
                                    {asset.deviceName}
                                </td>
                                <td>
                                    {asset.deviceCategory}
                                </td>
                            </tr>
                        )
                    }) : null}
                </tbody>
            </table>

            <button onClick={handleSignOut} class="btn btn-primary">
                Log Out
            </button>


        </div>
    )
}