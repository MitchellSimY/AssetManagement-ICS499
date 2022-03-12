import * as React from "react";
import { useContext, useState } from "react";
import { PersonCircle, HouseDoorFill } from 'react-bootstrap-icons';
import { UserContext } from "./UserContext";
import { Link, useNavigate } from "react-router-dom";

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
        navigate("../addAsset");
    }

    return (
        <div>
            <nav class="navbar navbar-dark bg-dark justify-content-between" color="black" style={menuButtonStyles}>

                {/* Left side of the nav bar */}
                <div style={{ paddingLeft: '1em' }}>
                    <Link to="../">
                        <button type="button" class="btn btn-outline-light">
                            <HouseDoorFill color="white" size={25} style={menuButtonStyles} />
                        </button>
                    </Link>
                    <a class="navbar-brand" style={{ paddingLeft: '1em', paddingTop: '1em', color: "white" }} onClick={navigateAsset}>
                        Add Assets
                    </a>

                    <a class="navbar-brand" style={{ paddingLeft: '1em', paddingTop: '1em', color: "white" }}>
                    {/* {user.admin ? "Is admin" : "Not admin"} */}
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

        </div>
    );
}