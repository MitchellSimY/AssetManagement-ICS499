import * as React from "react";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Components/UserContext";

export default function ViewAppointments() {

  const [allReqs, setAllReqs] = useState();
  const [allAppointments, setAllAppointments] = useState()
  const { user } = useContext(UserContext)

  const tableStyle = {
    textAlign: "center",
    paddingLeft: "30rem",
    paddingTop: "50rem",
    width: "60rem",
    margin: "auto",
  }

  useEffect(() => {
    fetch(`http://localhost:8080/appointment/getUserAppointment/${user ? user.id : null}`)
      .then((res) => res.json())
      .then((result) => {
        setAllAppointments(result.reverse());
      });
  })

  function cancelAppointment() {

  }

  return (
    <div>
      <br />
      <table class="table table-hover" style={tableStyle}>
        <thead>
          <tr>
            <th scope="col">Appointment Date</th>
            <th scope="col">Appointment Time</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          {allAppointments ? allAppointments.map((appts, index) => {
            return (
              <tr>
                <td>{appts.requestedDate}</td>
                <td>{appts.requestedTime}</td>
                <td>
                  <button class="btn btn-danger" onClick={cancelAppointment}>Cancel</button></td>
              </tr>
            )
          }) : null}
        </tbody>
      </table>
    </div>
  )
}