import * as React from "react";
import { useContext, useState, useEffect } from "react";
import { PersonCircle, HouseDoorFill } from "react-bootstrap-icons";
import { UserContext } from "../../Components/UserContext";
import { Link, useNavigate } from "react-router-dom";

export default function AddAsset() {
  // States
  const [allAssets, setAllAssets] = useState();

  // On page load
  useEffect(() => {
    getAllData();
  });

  componentDidMount: function(){
    this.timer = setInterval(this.tick, 1000);
    }

  // Asset Type Options
  const assetTypesArray = [
    "Laptop",
    "Periphrials",
    "Printer/Scanner",
    "Tablets",
    "Headphones",
    "Storage Systems",
    "Surge Protectors",
    "Speakers",
    "Monitors",
    "Docking Stations",
  ];

  const styles = {
    textAlign: "center",
    paddingTop: "10rem",
    width: "60rem",
    margin: "auto",
  };

  function getAllData() {
    fetch(`http://localhost:8080/asset/getAllAssets`)
    .then((res) => res.json())
    .then((result) => {
      setAllAssets(result);
    });
    console.table(allAssets[1].deviceCategory);
  }

  return (
    <div>

      <h1>View all assets</h1>
      <button onClick={getAllData}>Test</button>
      <table class="table table-hover" style={styles}>
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Asset Name</th>
            <th scope="col">Asset Type</th>
          </tr>
        </thead>
        <tbody>
          {allAssets.map((asset, index) => (
            <tr>
              <th scope="row"></th>
              <td>{asset.deviceName}</td>
              <td>{asset.deviceCategory}</td>
              <td>@mdo</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
