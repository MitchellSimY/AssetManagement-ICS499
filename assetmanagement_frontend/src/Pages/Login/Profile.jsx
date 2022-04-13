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

    function randomFunciton() {
        console.log(user)
    }

    return (
        <div style={{ paddingLeft: '5rem', paddingTop: "3em" }}>
            <div>
                <h2>Welcome, {user?.firstName} {user?.lastName}!</h2>

            </div>

            <br />


            <button onClick={handleSignOut}>
                Log Out
            </button>
            <button onClick={randomFunciton}>
                Test
            </button>

            <table class="table table-hover" style={tableStyle}>
                <thead>
                    <tr>
                        <th scope="col">User Information</th>
                    </tr>
                </thead>
                <tbody>
                    {/* User Data Here */}
                    <tr>
                        User ID:
                        {user?.id}
                    </tr>
                    <tr>
                        Name:
                        {user?.firstName} {user?.lastName}
                    </tr>
                    <tr>
                        Email:
                        {user?.email}
                    </tr>

                    <tr>
                        Phone:
                        {user?.phone}
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


        </div>
    )
}