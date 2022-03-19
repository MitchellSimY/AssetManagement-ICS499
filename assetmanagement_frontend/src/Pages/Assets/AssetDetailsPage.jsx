import * as React from "react";
import { useContext, useState, useEffect } from "react";

export default function AssetDetailsPage({incomingId}) {

    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get("id");
    const [asset, setAsset] = useState();

    const styleDetailsPage = {
        paddingLeft: "30rem",
        width: "60rem",
        margin: "auto",
      };

    useEffect(() => {
        fetch(`http://localhost:8080/asset/getAsset/${id}`)
        .then((res) => res.json())
        .then((result) => {
            setAsset(result);
        });
    })


    return (
        <div style={styleDetailsPage}>
            <br />
            <br />
            <br />
            <h4>Device Name: {asset? asset.deviceName : ""}</h4>
            <h4>Device Description: {asset? asset.deviceDescription : ""}</h4>
            <h4>Device Location: {asset? asset.deviceLocation : ""}</h4>
        </div>
    )
}