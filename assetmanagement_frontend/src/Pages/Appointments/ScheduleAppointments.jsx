import * as React from "react";
import { useState } from "react";

export default function ScheduleAppointment() {
    const style = {
        paddingLeft: "3rem",
        paddingTop: "5rem",
        width: "40rem",
    }

    function clickDisBitch() {
        console.log("Gang");
    }

    return (
        <div style={style}>
            <table class="table table-hover">
                <tbody>
                    <tr style={{backgroundColor : "green"}} >
                    <th></th>
                    <th></th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>

                    </tr>
                    <tr>
                        <td>9AM</td>
                        <td></td>
                        <td><div onClick={clickDisBitch}>Gang</div></td>
                        <td>Gang</td>
                        <td>Gang</td>
                        <td>Gang</td>
                        <td>Gang</td>
                    </tr>
                    <tr>
                        <td>10AM</td>
                        <td></td>
                        <td>Gang</td>
                        <td>Gang</td>
                        <td>Gang</td>
                        <td>Gang</td>
                        <td>Gang</td>
                    </tr>
                    <tr>
                        <td>11AM</td>
                        <td></td>
                        <td>Gang</td>
                        <td>Gang</td>
                        <td>Gang</td>
                        <td>Gang</td>
                        <td>Gang</td>
                    </tr>
                    <tr>
                        <td>12PM</td>
                        <td></td>
                        <td>Gang</td>
                        <td>Gang</td>
                        <td>Gang</td>
                        <td>Gang</td>
                        <td>Gang</td>
                    </tr>
                    <tr>
                        <td>1PM</td>
                        <td></td>
                        <td>Gang</td>
                        <td>Gang</td>
                        <td>Gang</td>
                        <td>Gang</td>
                        <td>Gang</td>
                    </tr>
                    <tr>
                        <td>2PM</td>
                        <td></td>
                        <td>Gang</td>
                        <td>Gang</td>
                        <td>Gang</td>
                        <td>Gang</td>
                        <td>Gang</td>
                    </tr>
                    <tr>
                        <td>3PM</td>
                        <td></td>
                        <td>Gang</td>
                        <td>Gang</td>
                        <td>Gang</td>
                        <td>Gang</td>
                        <td>Gang</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}