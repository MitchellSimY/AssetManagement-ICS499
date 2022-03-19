import * as React from "react";
import { useContext } from "react";
import BulletinCards from "../Components/BulletinCards"
import { UserContext } from "../Components/UserContext";
import { Link, useNavigate} from "react-router-dom";


export default function Home() {
    let navigate = useNavigate();


    const { user, setUser } = useContext(UserContext);

    var isAdmin = null;
    if (user) {
        isAdmin = (user.admin === true)
    } else {
        isAdmin = "";
    }


    function clearStorage(e) {
        e.preventDefault();
        setUser()
        navigate(`../`);
    }

    function testFunction(e) {
        e.preventDefault();

        console.log(user.admin)
        console.log(isAdmin)
    }

    return (
        <div style={{ paddingLeft: '2em' }}>
            <h2 style={{paddingTop: '1em'}}>
                Latest Announcements <br />
            </h2>
            <div>
                <BulletinCards />
            </div>
            
            <br />
            <h2>Pending Asset Requests</h2>

                <br />
                <br />
                <br />
                <br />

                <h2>Pending IT Help</h2>

                <br />
                <br />
                <br />
                <br />

                
            {user ? <div><h2>You are now logged in: </h2><h3>
            {user.firstName} {user.lastName} <br />
            {user.phone} <br />
            {user.userName} <br />
            Admin: {user.admin.toString()}</h3></div> : ""}

            {/* {isAdmin ? "Hi" : "Hello"} */}

            <Link to="../">
                <button onClick={clearStorage}>Log Out</button>
            </Link>

            <button onClick={testFunction}>Press</button>
        </div>
    );
}
