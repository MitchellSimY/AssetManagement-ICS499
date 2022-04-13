import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddAsset() {
  let nav = useNavigate()

  // States
  const [deviceName, setDeviceName] = useState("");
  const [deviceCategory, setDeviceCategory] = useState("");
  const [deviceDescription, setDeviceDescription] = useState("");
  const [deviceLocation, setDeviceLocation] = useState("");

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

  function addToDatabase(e) {
    e.preventDefault();

    const asset = { deviceName, deviceCategory, deviceDescription, deviceLocation }

    fetch("http://localhost:8080/asset/add", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(asset),
    }).then(() => {
      console.log("New asset added!");
    });


    nav("../viewAllAssets")
  }

  return (
    <div>
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

          {/* The actual dropdown */}
          <select
            id="inputState"
            class="form-control"
            value={deviceCategory}
            onChange={(e) => setDeviceCategory(e.target.value)}
          >

            {/* Drop down options */}
            <option value=""></option>
            {assetTypesArray.map((assetType, index) => (
              <option value={assetType}>{assetType}</option>
            ))}
          </select>
        </div>

        {/* Device Description */}
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
        {/* End Of Device Description */}

        {/* Device Location */}
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              Device Location
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="Device Location"
            aria-label="Asset Name"
            aria-describedby="basic-addon1"
            onChange={(e) => setDeviceLocation(e.target.value)}
            required
          />
        </div>
        {/* End Of Device Location */}


        <button onSubmit={addToDatabase}>Add Asset</button>
      </form>
    </div>
  );
}
