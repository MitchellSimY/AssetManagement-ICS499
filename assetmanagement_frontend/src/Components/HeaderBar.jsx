import * as React from "react";
import { useContext } from "react";
import { PersonCircle, HouseDoorFill } from 'react-bootstrap-icons';
import { UserContext } from "./UserContext";
import { Link, useNavigate } from "react-router-dom";
import HeaderStyle from "../Components/HeaderBarStyles.css"

export default function HeaderBar() {
    let navigate = useNavigate();
    const { user } = useContext(UserContext);

    // Styles
    const menuButtonStyles = {
        backgroundColor: 'linear-gradient(#e66465, #9198e5)',
    }

    function handlePersonCircle(e) {
        e.preventDefault();

        if (user) {
            navigate("../profile");
        } else {
            navigate("../")
        }
    }

    function navigateAsset(e) {
        e.preventDefault();
        navigate("../viewAllAssets");
    }

    function naviagteBulletins(e) {
        e.preventDefault();
        navigate("../viewAllBulletins");
    }

    function navigateITHelp(e) {
        e.preventDefault();
        navigate("../scheduleAppointment")
    }

    function navigateToAllUsers(e) {
        e.preventDefault();
        navigate("../allUsers")
    }

    function navUserRequests(e) {
        e.preventDefault();
        navigate("../pendingUserAssetRequests")
    }

    function navAppointments(e) {
        e.preventDefault();
        navigate("../allAppointments")
    }

    return (

        <div style={HeaderStyle}>
            {user?.userName ?
                <nav class="navbar navbar-dark bg-dark justify-content-between" color="black" style={menuButtonStyles}>

                    {/* Left side of the nav bar */}
                    <div style={{ paddingLeft: '1em' }}>
                        <Link to="../home">
                            <button type="button" class="btn btn-outline-light">
                                <HouseDoorFill color="white" size={25} style={menuButtonStyles} />
                            </button>
                        </Link>

                        {/* Assets Link */}
                        <a class="navbar-brand" style={{ paddingLeft: '1em', paddingTop: '1em', color: "white", cursor: 'pointer' }} onClick={navigateAsset}>
                            Assets
                        </a>

                        {/* Bulletin Link */}
                        <a class="navbar-brand" style={{ paddingLeft: '1em', paddingTop: '1em', color: "white", cursor: 'pointer' }} onClick={naviagteBulletins}>
                            Bulletins
                        </a>

                        {/* IT Help Link */}
                        <a class="navbar-brand" style={{ paddingLeft: '1em', paddingTop: '1em', color: "white", cursor: 'pointer' }} onClick={navigateITHelp}>
                            Schedule IT Help
                        </a>

                        {/* Users Link */}
                        <a class="navbar-brand" style={{ paddingLeft: '1em', paddingTop: '1em', color: "white", cursor: 'pointer' }} onClick={navigateToAllUsers}>
                            All Users
                        </a>

                        {/* Pending User reqs */}
                        {user?.isAdmin ?
                        <>
                            <a class="navbar-brand" style={{ paddingLeft: '1em', paddingTop: '1em', color: "white", cursor: 'pointer' }} onClick={navUserRequests}>
                                Pending User Requests
                            </a>
                            <a class="navbar-brand" style={{ paddingLeft: '1em', paddingTop: '1em', color: "white", cursor: 'pointer' }} onClick={navAppointments}>
                                Pending Appointments
                            </a>
                            </>
                            : null}

                        <a class="navbar-brand" style={{ paddingLeft: '1em', paddingTop: '1em', color: "white", cursor: 'pointer' }}>
                            {user ? `${user.admin ? `|| ADMIN USER: ${user.firstName} ${user.lastName}` : `|| USER: ${user.firstName} ${user.lastName}`}` : "No account signed in"}
                        </a>



                        <a class="navbar-brand" style={{ paddingLeft: '1em', FpaddingTop: '1em', color: "white" }}>
                        </a>

                    </div>

                    {/* Right side of the nav bar */}
                    <div class="form-inline" >

                        {/* <Link to="../login">  */}
                        <div style={{ paddingRight: '1em' }}>
                            <button onClick={handlePersonCircle}>
                                <PersonCircle size={30} color="#c44dff" />
                            </button>
                        </div>
                    </div>
                </nav>
                : null}
        </div>
    );
}