import * as React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Components/UserContext";

export default function Profile() {
    let navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);

    function handleSignOut() {
        setUser();
        navigate("../")
    }

    return (
        <div>
            <div style={{ paddingLeft: '1rem' }}>
                <h2>Welcome, {user?.firstName}!</h2>
            </div>


            <button onClick={handleSignOut}>
                Log Out
            </button>
        </div>
    )
}