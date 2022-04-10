import * as React from "react";
import { useState } from "react";

export default function AddBulletin() {

  const [announcementType, setType] = useState("");
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");

  // Announcement Types Array
  const announcementTypesArray = [
      "New product",
      "Notice",
      "Deadline"
  ];

  function onSubmit(e) {
      e.preventDefault();

      var timeStamp = "today"
      const bulletin = {announcementType, message, title, timeStamp};

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
            required
          >

            {/* Drop down options */}
            <option value=""></option>

            {announcementTypesArray.map((option, index) => (
              <option value={option}>{option}</option>
            ))}
            
          </select>
        </div>

            <button type="submit" onSubmit={onSubmit} class="btn btn-success">Submit</button>
        </form>
    </div>
  );
}
