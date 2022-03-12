import * as React from "react";
import { useContext, useState } from "react";
import { PersonCircle, HouseDoorFill } from "react-bootstrap-icons";
import { UserContext } from "../../Components/UserContext";
import { Link, useNavigate } from "react-router-dom";

export default function AddAsset() {
  // States
  const [assetName, setAssetName] = useState("");
  const [assetType, setAssetType] = useState("");

  // Asset Type Options
  const assetTypesArray = ["Laptop", "Periphrials", "Printer/Scanner", "Tablets", "Headphones", "Storage Systems", "Surge Protectors", "Speakers", "Monitors", "Docking Stations"];

  const styles = {
    textAlign: "center",
    paddingTop: "10rem",
    width: "30rem",
    margin: "auto",
  };

  function test(e) {
      e.preventDefault();
      console.log(assetType)
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
            onChange={(e) => setAssetName(e.target.value)}
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
          <select id="inputState" class="form-control" value={assetType} onChange={(e) => setAssetType(e.target.value)} >
            {assetTypesArray.map((assetType, index) => <option value={assetType}>{assetType}</option>)}
          </select>
        </div>
        <button onClick={test}>Print</button>
      </form>
    </div>
  );
}
