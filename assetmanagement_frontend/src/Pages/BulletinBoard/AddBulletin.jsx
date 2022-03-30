import * as React from "react";
import { useContext, useState } from "react";
import { PersonCircle, HouseDoorFill } from "react-bootstrap-icons";
// import { UserContext } from "../../Components/UserContext";
import { Link, useNavigate } from "react-router-dom";

export default function AddBulletin() {
  let nav = useNavigate()

  const [announcementType, setType] = useState("");
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");

  // Announcement Types Array
  const announcementTypesArray = [
      "Test 1 ",
      "Test 2",
      "Test 3"
  ];

  function onSubmit(e) {
      e.preventDefault();
      const bulletin = {announcementType, message, title};

      fetch("http://localhost:8080/bulletin/add", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(bulletin),
    }).then(() => {
        console.log("New bulletin added!");
    });
  }

  return (
    <div>
        Adding Bulletins
        <form>
            {/* Title */}
            <label for="inputTitle">Title</label>
            <input type="text" class="form-control" id="inputTitle" placeholder="Title" onChange={(e) => setTitle(e.target.value)} required />

            {/* Text of Bulletin */}
            <label for="inputBodyText">Bulletin text</label>
            <input type="text" class="form-control" id="inputBodyText" placeholder="Input Text Here" onChange={(e) => setMessage(e.target.value)} required />

            
            {/* Announcement Types */}
            <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              Announcement Type
            </span>
          </div>

          {/* The actual dropdown */}
          <select
            id="inputState"
            class="form-control"
            value={announcementType}
            onChange={(e) => setType(e.target.value)}
          >

            {/* Drop down options */}
            <option value=""></option>

            {announcementTypesArray.map((option, index) => (
              <option value={option}>{option}</option>
            ))}
            
          </select>
        </div>

            <button onClick={onSubmit}>Submit</button>
        </form>
    </div>
  );
}
