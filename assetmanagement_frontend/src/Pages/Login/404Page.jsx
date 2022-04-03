import * as React from "react";
import { Link } from "react-router-dom";

export default function _404Page() {

    const styles = {
        textAlign: 'center',
        paddingTop: '15rem',
        width: '30rem',
        margin: 'auto',
    }


    return (
        <div style={styles}>
            404 Error
            <br />
            <Link to={"../"}>
            Click here to go back to the login page
            </Link>
            <br />
            You're not supposed to be here bud
        </div>
    )

}