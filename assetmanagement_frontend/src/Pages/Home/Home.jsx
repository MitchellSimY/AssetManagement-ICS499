import * as React from "react";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../Components/UserContext";
import { Link, useNavigate } from "react-router-dom";
import HomeViewReqs from "./HomeViewReqs.jsx";
import HomeViewBulletins from "./HomeViewBulletins.jsx";
import HomeStyles from "./HomeStyles.css"


export default function Home() {
    let navigate = useNavigate();



    const { user, setUser } = useContext(UserContext)
    const [allRequests, setAllRequests] = useState()

    // On page load
    // Getting all user requests
    useEffect(() => {
        fetch(`http://localhost:8080/assetRequest/getUsersRequests/${user ? user.id : null}`)
            .then((res) => res.json())
            .then((result) => {
                setAllRequests(result.reverse());
            });
    }, [user]);

    function clearStorage(e) {
        e.preventDefault();
        setUser()
        navigate(`../`);
    }



    function getDate(e) {
        e.preventDefault();
        let d = new Date()
        let date = d.getDate();
        let month = d.getMonth() + 1;
        let year = d.getFullYear();
        let day = d.getDay();
        let utcms = d.getUTCMilliseconds();
        let ms = d.getMilliseconds();

        // console.log(`varDate ${varDate}`)

        console.log(`UTCMS ${utcms}`)
        console.log(`ms ${ms}`)
        console.log("new date = " + d)

        let theDate = month + "/" + date + "/" + year;
        console.log("day = " + day);
        console.log(theDate);

    }

    return (

        <div style={{ paddingLeft: '2em' }}>
            <h2 style={{ paddingTop: '1em' }}>
                Latest Announcements <br />
            </h2>

            <HomeViewBulletins />


            <br />
            <h2 style={HomeStyles}>Pending Asset Requests</h2>
            <HomeViewReqs requests={allRequests} />
            <br />

            <h2>Pending IT Help</h2>

            <br />
            <br />
            <br />
            <br />


            {user ? <div><h2>You are now logged in: </h2><h3>
                {user.firstName} {user.lastName} <br />
                {user.id}
                {user.phone} <br />
                {user.userName} <br />
                Admin: {user.admin.toString()}</h3></div> : ""}

            <Link to="../">
                <button onClick={clearStorage}>Log Out</button>
            </Link>

            <button onClick={getDate}>Press</button>

        </div>
    );
}
