import * as React from "react";
import { useContext, useState, useEffect } from "react";
import { Box, Headphones, Laptop, PersonWorkspace, Printer, Speaker, TabletLandscape, UsbDrive, Cast } from "react-bootstrap-icons";
import { UserContext } from "../../Components/UserContext";
import { Link, useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';


export default function AddAsset() {
  // States
  const [allAssets, setAllAssets] = useState();
  const [assetTypeFilter, setAssetTypeFilter] = useState('');
  const [deviceNameSearch, setDeviceNameSearch] = useState('');

  // Constants
  let navigate = useNavigate();

  // On page load
  useEffect(() => {
    fetch(`http://localhost:8080/asset/getAllAssets`)
      .then((res) => res.json())
      .then((result) => {
        setAllAssets(result);
      });
  });

  // Asset Type Options
  const assetTypesArray = [
    "Show all options",
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

  const tableStyle = {
    textAlign: "center",
    paddingLeft: "30rem",
    paddingTop: "20rem",
    width: "60rem",
    margin: "auto",
  };

  function handleAddAsset(e) {
    e.preventDefault();
    navigate("../addAsset")
  }
 
  function filterChosen(e) {
    var chosenAssetType = e.target.getAttribute("keyid")
    if (chosenAssetType == "Show all options") {
      setAssetTypeFilter('')
    } else {
      setAssetTypeFilter(chosenAssetType)
    }
  }

  function iconSelection(asset) {
    if (asset === "Laptop") {
      return <Laptop size={30} />
    } else if (asset === "Tablets") {
      return <TabletLandscape size={30} />
    } else if (asset === "Periphrials") {
      return <Box size={30} />
    } else if (asset === "Printer/Scanner") {
      return <Printer size={30} />
    } else if (asset === "Headphones") {
      return <Headphones size={30}/>
    } else if (asset === "Storage Systems") {
      return <UsbDrive size={30} />
    } else if (asset === "Speakers") {
      return <Speaker size={30} />
    } else if (asset === "Monitors") {
      return <PersonWorkspace size={30} />
    } else if (asset === "Docking Stations") {
      return <Cast size={30} />
    }
    return asset;
  }

  return (
    <div>
      <br />
      <div style={{float: "right", paddingRight: "25em"}}>
        <button type="button" class="btn btn-success" onClick={handleAddAsset}>Add Assets</button>
      </div>


      <Grid container spacing={2}>
        <Grid item xs={1}>
        </Grid>

        <Grid item xs={2}>
          <table style={{ paddingLeft: "10rem" }}>
            <thead>
              <tr>
                <th scope="col"><h2>Filter Asset Options</h2></th>
              </tr>
            </thead>
            <div class="input-group mb-3">
          {/* Asset Name */}
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              Search
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="Asset Name"
            aria-label="Asset Name"
            aria-describedby="basic-addon1"
            onChange={(e) => setDeviceNameSearch(e.target.value)}
            required
          />
        </div>


            {assetTypesArray.map((assetOption, index) => (
              <tr><h4 onClick={filterChosen} style={{cursor:'pointer'}} keyid={assetOption}>{assetOption}</h4></tr>
            ))}

          </table>
        </Grid>

        <Grid item xs={8}>
          <table class="table table-hover" style={tableStyle}>
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Asset Name</th>
                <th scope="col">Asset Type</th>
              </tr>
            </thead>
            <tbody>
              {
              allAssets ? allAssets.map(asset => {
                if (!(asset.deviceName.toUpperCase().includes(deviceNameSearch.toUpperCase()))) {
                  return null;
                }

                if (assetTypeFilter != '') {
                  if (asset.deviceCategory != assetTypeFilter) {
                    return null;
                  }
                }


                return (
                  <tr>
                  <th scope="row">{iconSelection(asset.deviceCategory)}</th>
                  <td>{asset.deviceName}</td>
                  <td>{asset.deviceCategory}</td>
                  <td><button type="button" class="btn btn-primary">Request</button></td>
                </tr>
                )

              })
              : ""}
            </tbody>
          </table>
        </Grid>
      </Grid>
    </div>
  );
}
