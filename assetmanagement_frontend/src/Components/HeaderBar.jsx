import * as React from "react";
import { PersonCircle, MenuButtonWide } from 'react-bootstrap-icons';

export default function Student() {

    // Styles
    const menuButtonStyles = {
        backgroundColor: 'linear-gradient(#e66465, #9198e5)',
    }


    // Functions
    function handleMenuClick(e) {
        console.log("Hello");

    }

    return (
        <div>
            <nav class="navbar justify-content-between" style={menuButtonStyles}>

                {/* Left side of the nav bar */}
                <div style={{ paddingLeft: '1em'}}>
                    <MenuButtonWide color="white" size={25} onClick={handleMenuClick} style={menuButtonStyles}/>
                    <a class="navbar-brand" style={{ paddingLeft: '1em', paddingTop:'1em', color: "white"}}>
                        Option 1
                    </a>
                </div>

                {/* Right side of the nav bar */}
                <div class="form-inline" >
                    <div style={{ paddingRight: '1em'}}>
                        <PersonCircle size={30} color="#c44dff"/>
                    </div>
                </div>
            </nav>
            
        </div>
    );
}