import * as React from "react";
import { useContext } from "react";
import BulletinCards from "../Components/BulletinCards"
import { UserContext } from "../Components/UserContext";
import { Link } from "react-router-dom";


export default function Home() {
    const { user, setUser } = useContext(UserContext);


    function clearStorage(e) {
        e.preventDefault();
        localStorage.clear();
        window.location.reload(false);
    }

    return (
        <div style={{ paddingLeft: '1em' }}>
            <h2>
                Home Page <br />
            </h2>
            {/* {JSON.stringify(user, null, 2 )} */}
            <div>
                <BulletinCards />
            </div>
            {user ? <div><h2>You are now logged in: </h2><h3>
            {user.firstName} {user.lastName} <br />
            {user.phone} <br />
            {user.userName} <br />
            Admin: {user.admin.toString()}</h3></div> : ""}

            <Link to="../">
                <button onClick={clearStorage}>Log Out</button>
            </Link>
        </div>
    );
}
