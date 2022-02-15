import * as React from "react";
import { useState } from "react";
import SideBar from "./Sidebar"
import { PersonCircle, MenuButtonWide } from 'react-bootstrap-icons';

export default function HeaderBar() {

    const [showSideBar, setShowSideBar] = useState(false);

    // Styles
    const menuButtonStyles = {
        backgroundColor: 'linear-gradient(#e66465, #9198e5)',
    }


    // Functions
    function handleMenuClick(e) {
        e.preventDefault();

        console.log(showSideBar)
        setShowSideBar(!showSideBar);
    }

    return (
        <div>
            {showSideBar ? <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar}/> : ""}
            <nav class="navbar navbar-dark bg-dark justify-content-between" color="black" style={menuButtonStyles}>

                {/* Left side of the nav bar */}
                <div style={{ paddingLeft: '1em' }}>
                    <button type="button" class="btn btn-outline-light" onClick={handleMenuClick} >
                        <MenuButtonWide color="white" size={25} style={menuButtonStyles} />
                    </button>
                    <a class="navbar-brand" style={{ paddingLeft: '1em', paddingTop: '1em', color: "white" }}>
                        Option 1
                    </a>
                </div>

                {/* Right side of the nav bar */}
                <div class="form-inline" >
                    <div style={{ paddingRight: '1em' }}>
                        <PersonCircle size={30} color="#c44dff" />
                    </div>
                </div>
            </nav>

        </div>
    );
}