import * as React from "react";
import { PersonCircle, HouseDoorFill } from 'react-bootstrap-icons';

export default function HeaderBar() {

    // Styles
    const menuButtonStyles = {
        backgroundColor: 'linear-gradient(#e66465, #9198e5)',
    }


    // Functions
    function handleHomeClick(e) {
        e.preventDefault();
        window.location = "../";
    }

    function handleLogin(e) {
        e.preventDefault();
        window.location = "../login";
    }

    return (
        <div>
            <nav class="navbar navbar-dark bg-dark justify-content-between" color="black" style={menuButtonStyles}>

                {/* Left side of the nav bar */}
                <div style={{ paddingLeft: '1em' }}>
                    <button type="button" class="btn btn-outline-light" onClick={handleHomeClick} >
                        <HouseDoorFill color="white" size={25} style={menuButtonStyles} />
                    </button>
                    <a class="navbar-brand" style={{ paddingLeft: '1em', paddingTop: '1em', color: "white" }}>
                        Option 1
                    </a>
                </div>

                {/* Right side of the nav bar */}
                <div class="form-inline" >
                    <div style={{ paddingRight: '1em' }} onClick={handleLogin}>
                        <button>
                            <PersonCircle size={30} color="#c44dff" />
                        </button>
                    </div>
                </div>
            </nav>

        </div>
    );
}