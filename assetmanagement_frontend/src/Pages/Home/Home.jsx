import * as React from "react";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../Components/UserContext";
import { Link, useNavigate } from "react-router-dom";
import HomeViewReqs from "./HomeViewReqs.jsx";
import HomeViewBulletins from "./HomeViewBulletins.jsx";
import HomeViewAppts from "./HomeViewAppt";
import HomeStyles from "./HomeStyles.css"


export default function Home() {
    let navigate = useNavigate();



    const { user, setUser } = useContext(UserContext)
    const [allRequests, setAllRequests] = useState()
    const [allAppointments, setAllAppointments] = useState()

    // On page load
    // Getting all user requests
    useEffect(() => {
        fetchEverything()
    }, [user]);

    function fetchEverything() {
        fetch(`http://localhost:8080/assetRequest/getUsersRequests/${user ? user.id : null}`)
        .then((res) => res.json())
        .then((result) => {
            setAllRequests(result.reverse());
        });

        fetch(`http://localhost:8080/appointment/getUserAppointment/${user ? user.id : null}`)
        .then((res) => res.json())
        .then((result) => {
            setAllAppointments(result.reverse());
        });

        
    }

    function clearStorage(e) {
        e.preventDefault();
        setUser()
        navigate(`../`);
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
            <HomeViewAppts appointments={allAppointments}/>


        </div>
    );
}
