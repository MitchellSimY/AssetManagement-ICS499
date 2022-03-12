import * as React from "react";
import { useContext, useState, useEffect } from "react";
import { Box, Headphones, Laptop, PersonWorkspace, Printer, Speaker, TabletLandscape, UsbDrive, Cast } from "react-bootstrap-icons";
import { UserContext } from "../../Components/UserContext";
import { Link, useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';


export default function AddAsset() {
  // States
  const [allAssets, setAllAssets] = useState();

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

  function iconSelection(asset) {
    if (asset == "Laptop") {
      return <Laptop size={30} />
    } else if (asset == "Tablets") {
      return <TabletLandscape size={30} />
    } else if (asset == "Periphrials") {
      return <Box size={30} />
    } else if (asset == "Printer/Scanner") {
      return <Printer size={30} />
    } else if (asset == "Headphones") {
      return <Headphones size={30}/>
    } else if (asset == "Storage Systems") {
      return <UsbDrive size={30} />
    } else if (asset == "Speakers") {
      return <Speaker size={30} />
    } else if (asset == "Monitors") {
      return <PersonWorkspace size={30} />
    } else if (asset == "Docking Stations") {
      return <Cast size={30} />
    }
    return asset;
  }

  return (
    <div>
      <br />

      <Grid container spacing={2}>
        <Grid item xs={1}>
        </Grid>

        <Grid item xs={2}>
          <table style={{ paddingRight: "10rem" }}>
            <thead>
              <tr>
                <th scope="col"><h2>Filter Asset Options</h2></th>
              </tr>
            </thead>
            <tr><h4>Test</h4></tr>
            <tr><h4>Test</h4></tr>
            <tr><h4>Test</h4></tr>
            <tr><h4>Test</h4></tr>
            <tr><h4>Test</h4></tr>


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
              {allAssets ? allAssets.map((asset, index) => (
                <tr>
                  <th scope="row">{iconSelection(asset.deviceCategory)}</th>
                  <td>{asset.deviceName}</td>
                  <td>{asset.deviceCategory}</td>
                  <td><button type="button" class="btn btn-primary">Request</button></td>
                </tr>
              )) : ""}
            </tbody>
          </table>
        </Grid>
      </Grid>
    </div>
  );
}
