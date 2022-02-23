import * as React from "react";
import { useContext, useState } from "react";
import { PersonCircle, HouseDoorFill } from 'react-bootstrap-icons';
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";

export default function HeaderBar() {
    const [user, setUser] = useState(null);

    // Styles
    const menuButtonStyles = {
        backgroundColor: 'linear-gradient(#e66465, #9198e5)',
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
                    <a class="navbar-brand" style={{ paddingLeft: '1em', paddingTop: '1em', color: "white" }}>
                        Option 1
                    </a>
                </div>

                {/* Right side of the nav bar */}
                <div class="form-inline" >
                    <Link to="../login">
                        <div style={{ paddingRight: '1em' }}>
                            <button>
                                <PersonCircle size={30} color="#c44dff" />
                            </button>
                        </div>
                    </Link>
                </div>
            </nav>

        </div>
    );
}