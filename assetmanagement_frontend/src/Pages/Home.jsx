import * as React from "react";
import { useContext } from "react";
import BulletinCards from "../Components/BulletinCards"
import { UserContext } from "../Components/UserContext";
import { Link } from "react-router-dom";


export default function Home() {
    const {user, setUser} = useContext(UserContext);


    function clearStorage(e) {
        e.preventDefault();
        localStorage.clear();
        window.location.reload(false);
    }

    return (
        <div>
            <h2>
                Home Page <br />
            </h2>
            {JSON.stringify(user, null, 2 )}
            <div style={{ paddingLeft: '1em' }}>
                <BulletinCards />
            </div>
            <Link to="../">
            <button onClick={clearStorage}>Clear local storage</button>
            </Link>
        </div>
    );
}
