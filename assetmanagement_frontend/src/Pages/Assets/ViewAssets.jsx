import * as React from "react";
import { useState, useEffect } from "react";
import { Box, Headphones, Laptop, PersonWorkspace, Printer, Speaker, TabletLandscape, UsbDrive, Cast, InfoCircle } from "react-bootstrap-icons";
import { UserContext } from "../../Components/UserContext";
import { Link, useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import RequestPopup from "../AssetRequest/RequestPopup";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";


export default function AddAsset() {
  // States
  const [allAssets, setAllAssets] = useState();
  const [assetTypeFilter, setAssetTypeFilter] = useState('');
  const [deviceNameSearch, setDeviceNameSearch] = useState('');
  const [openPopup, setOpenPopup] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const [requestedAsset, setRequestedAsset] = useState();

  // Modal configuration
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  // Constants
  let navigate = useNavigate();

  // On page load
  useEffect(() => {
    fetch(`http://localhost:8080/asset/getAllAssets`)
      .then((res) => res.json())
      .then((result) => {
        setAllAssets(result.reverse());
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
      return <Headphones size={30} />
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

  function handleAssetInfoClick(asset) {
    setRequestedAsset(asset);
    if (show) {
      setShow(false);
    }
    setShowDetails(true);
    setShow(true);
    setOpenPopup(!openPopup)

  }

  function handleRequest(asset) {
    setRequestedAsset(asset);
    setShowDetails(false);
    setShow(!show);

    setOpenPopup(!openPopup)
  }

  return (
    <div>
      {openPopup ? <RequestPopup show={show} handleClose={handleClose} asset={requestedAsset} showDetails={showDetails}/> : ""}
      <br />
      <div style={{ float: "right", paddingRight: "25em" }}>
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
              <tr><h4 onClick={filterChosen} style={{ cursor: 'pointer' }} keyid={assetOption}>{assetOption}</h4></tr>
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
                    
                    <tr keyid={asset.id}>
                      <th keyid={asset.id} scope="row">{iconSelection(asset.deviceCategory)}</th>
                      <td>{asset.deviceName}</td>
                      <td>{asset.deviceCategory}</td>
                      <td>

                        <Button
                          variant="primary"
                          object={asset}
                          id={asset.id}
                          onClick={() => {
                            handleRequest(asset);
                          }}>
                          Request
                        </Button>

                          {" "}
                        <InfoCircle size={30} 
                        onClick={() => {
                          handleAssetInfoClick(asset)}} 
                          keyid={asset.id} />

                      </td>
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
