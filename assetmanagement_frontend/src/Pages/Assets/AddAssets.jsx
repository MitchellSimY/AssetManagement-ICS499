import * as React from "react";
import { useContext, useState } from "react";
import { PersonCircle, HouseDoorFill } from "react-bootstrap-icons";
import { UserContext } from "../../Components/UserContext";
import { Link, useNavigate } from "react-router-dom";

export default function AddAsset() {
  let nav = useNavigate()
  // States
  const [deviceName, setDeviceName] = useState("");
  const [deviceCategory, setDeviceCategory] = useState("");
  const [deviceDescription, setDeviceDescription] = useState("");

  // Asset Type Options
  const assetTypesArray = [
    "Laptop",
    "Periphrials",
    "Printer/Scanner",
    "Tablets",
    "Headphones",
    "Storage Systems",
    "Speakers",
    "Monitors",
    "Docking Stations",
  ];

  const styles = {
    textAlign: "center",
    paddingTop: "10rem",
    width: "30rem",
    margin: "auto",
  };

  function test(e) {
    e.preventDefault();

    const asset = {deviceName, deviceCategory, deviceDescription}

    console.table(asset);

    fetch("http://localhost:8080/asset/add", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(asset  ),
    }).then(() => {
        console.log("New asset added!");
    });
    nav("../viewAllAssets")
  }

  return (
    <div>
      <h1>This is the add asset page</h1>
      <form style={styles} required>
        <div class="input-group mb-3">
          {/* Asset Name */}
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              Asset Name
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="Asset Name"
            aria-label="Asset Name"
            aria-describedby="basic-addon1"
            onChange={(e) => setDeviceName(e.target.value)}
            required
          />
        </div>

        <div class="input-group mb-3">
          {/* Asset Type */}
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              Asset Type
            </span>
          </div>
          <select
            id="inputState"
            class="form-control"
            value={deviceCategory}
            onChange={(e) => setDeviceCategory(e.target.value)}
          >
            <option value=""></option>
            {assetTypesArray.map((assetType, index) => (
              <option value={assetType}>{assetType}</option>
            ))}
          </select>
        </div>

        {/* Device Location */}
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              Device Description
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="Device Description"
            aria-label="Asset Name"
            aria-describedby="basic-addon1"
            onChange={(e) => setDeviceDescription(e.target.value)}
            required
          />
        </div>

        <button onClick={test}>Print</button>
      </form>
    </div>
  );
}
