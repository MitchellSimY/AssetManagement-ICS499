import * as React from "react";
import { useState, useEffect } from "react";

export default function AllUsers() {
  const [allUsersList, setAllUsersList] = useState();

  const tableStyle = {
    textAlign: "center",
    paddingLeft: "30rem",
    paddingTop: "20rem",
    width: "60rem",
    margin: "auto",
  }

  // On page load
  useEffect(() => {
    fetch(`http://localhost:8080/user/getAllUsers`)
      .then((res) => res.json())
      .then((result) => {
        setAllUsersList(result);
      });
  });

  return (
    <div>
        <br />
      <table class="table table-hover" style={tableStyle}>
        <thead>
          <tr>
            <th scope="col">User ID</th>
            <th scope="col">Online Name</th>
            <th scope="col">User's Name</th>
            <th scope="col">User Email</th>
            <th scope="col">User Phone Number</th>
            <th scope="col">User Type</th>
          </tr>
        </thead>
        <tbody>
          {allUsersList
            ? allUsersList.map((user) => {
                return (
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.userName}</td>
                    <td>
                      {user.firstName} {user.lastName}
                    </td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.isAdmin ? "Admin" : "User"}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
}
