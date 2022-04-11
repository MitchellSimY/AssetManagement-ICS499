import * as React from "react";
import { useState, useEffect, useContext } from "react";
import Grid from '@mui/material/Grid';
import cursorStyle from "./AppointmentStyles.css"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Components/UserContext";

export default function ScheduleAppointment() {
    let nav = useNavigate()

    const formStyle = {
        width: "30rem",
        margin: "auto",
    }

    // Constants
    const [dates, setDates] = useState([]);
    const [loadingDone, setLoadingDone] = useState();
    const [requestedTime, setRequestedTime] = useState("");
    const [requestedDate, setRequestedDate] = useState("");
    const [incorrectDate, setIncorrectDate] = useState(false);
    const [refuseSubmit, setRefuseSubmit] = useState(false);
    const { user } = useContext(UserContext)
    const times = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"]


    // Use Effects
    useEffect(() => {
        getDates()
    }, [loadingDone])

    function getDates() {
        var leDate = [];
        var curr = new Date;
        var day, i;

        for (i = 0; i < 8; i++) {
            day = curr.getDate() - curr.getDay() + i;
            var theDay = new Date(curr.setDate(day));
            if (theDay.getDay() != 0 && theDay.getDay() != 6) {
                leDate.push(theDay)
            }
        }

        for (i = 8; i <= 12; i++) {
            day = new Date();
            day.setDate(day.getDate() - day.getDay() + i);
            if (day.getDay() !== 0 || day.getDay() !== 6) {
                leDate.push(day)
            }
        }

        setDates(leDate)
        setLoadingDone(true);
    }

    function handleDateSelection(date) {
        var todaysDate = new Date()
        if (date <= todaysDate) {
            setIncorrectDate(true);
            return
        }

        if (date > todaysDate) {
            setIncorrectDate(false);
        }

        var month, day, year;
        month = date.getMonth() + 1
        day = date.getDate();
        year = date.getFullYear()
        setRequestedDate(`${month}/${day}/${year}`)
    }

    function returnDate(date) {
        var month, day
        month = date.getMonth() + 1
        day = date.getDate();

        return `${month}/${day}`;
    }

    function handleClick(e) {
        e.preventDefault()
        if (incorrectDate || requestedDate === "" || requestedTime === "") {
            setRefuseSubmit(true);
            return
        } else {
            setRefuseSubmit(false);
        }

        let requestorName = user.firstName + " " + user.lastName
        let requestorId = user.id

        const appointment = { requestorName, requestorId, requestedDate, requestedTime }
        console.table(appointment)

        fetch("http://localhost:8080/appointment/add", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(appointment),
        }).then(() => {
            console.log("New appointment added!");
        });
        nav("../home")
    }

    return (
        <div>
            <br />
            <div style={{
                margin: 'auto',
                textAlign: 'center'
            }}>
                <h1>Schedule IT Help</h1>
                <h4>Looking for assistance with your Tech? <br />
                    We have you covered.
                </h4>
            </div>

            <div >
                <Grid style={{
                    margin: 'auto',
                    textAlign: 'center'
                }} container spacing={2}>
                    <Grid xs={2}></Grid>
                    <Grid item xs={3}>
                        {incorrectDate ? <div class="alert alert-warning" role="alert">
                            Selected date must be after today
                        </div> : null}
                        <table class="table table-hover" >
                            <thead>
                                <tr>
                                    <th scope="col">Monday</th>
                                    <th scope="col">Tuesday</th>
                                    <th scope="col">Wednesday</th>
                                    <th scope="col">Thursday</th>
                                    <th scope="col">Friday</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {dates ? dates.map((date, index) => {
                                        if (index <= 4) {
                                            return (

                                                <td onClick={() => { handleDateSelection(date) }}>{returnDate(date)}</td>

                                            )
                                        }

                                    }) : null}
                                </tr>

                                <tr>
                                    {dates ? dates.map((date, index) => {
                                        if (index >= 5) {
                                            return (

                                                <td onClick={() => { handleDateSelection(date) }}>{returnDate(date)}</td>

                                            )
                                        }

                                    }) : null}
                                </tr>


                            </tbody>
                        </table>
                    </Grid>

                    <Grid item xs={4} style={formStyle}>
                        {refuseSubmit ? <div class="alert alert-warning" role="alert">
                            Issue with submission
                        </div> : null}
                        <h3>Selected Date: {requestedDate ? requestedDate : null}</h3>
                        <form required>

                            <div class="input-group mb-3">
                                {/* Time Type */}
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">
                                        Desired Time
                                    </span>
                                </div>

                                {/* The actual dropdown */}
                                <select
                                    id="inputState"
                                    class="form-control"
                                    value={requestedTime}
                                    onChange={(e) => setRequestedTime(e.target.value)}
                                >

                                    <option value=""></option>
                                    {/* Drop down options */}
                                    {times.map((times, index) => (
                                        <option value={times}>{times}</option>
                                    ))}
                                </select>
                            </div>
                            <button class="btn btn-success" onClick={handleClick}>Schedule Appointment</button>
                        </form>
                    </Grid>
                    <Grid xs={3}></Grid>
                    <br />
                </Grid>
            </div>
        </div >
    )
}