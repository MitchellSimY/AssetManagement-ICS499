import * as React from "react";
import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../Components/UserContext";

export default function Profile() {
    let navigate = useNavigate();
    const { user } = useContext(UserContext);

    function handleSignOut(e) {
        e.preventDefault();
        localStorage.clear();
        window.location.reload(false);
    }

    return (
        <div>
            <div style={{ paddingLeft: '1rem' }}>
                {/* <h2>Welcome, {user.firstName}!</h2> */}
            </div>


            <Link to="../login">
                <button onClick={handleSignOut}>Log Out</button>
            </Link>
        </div>
    )
}