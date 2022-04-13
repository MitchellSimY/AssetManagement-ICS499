import * as React from "react";
import { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import BulletinCards from "../BulletinBoard/BulletinCards";

export default function HomeViewBulletins() {

    const [allBulletins, setAllBulletins] = useState();

    useEffect(() => {
        fetch(`http://localhost:8080/bulletin/getAllBulletins`)
            .then((res) => res.json())
            .then((result) => {
                setAllBulletins(result.reverse());
            });
    });

    return (
        <div>
            <Grid container>
                {allBulletins ?
                    allBulletins.map((bulletin, index) => {
                        if (index >= 3) {
                            return
                        }
                        return (
                        <Grid item xs={2}>
                            <BulletinCards
                                title={bulletin.title}
                                announcementType={bulletin.announcementType}
                                bulletinText={bulletin.message}
                                bulletinId={bulletin.id} 
                                enableDelete={false}/>
                        </Grid>
                    )}) : ""
                }

            </Grid>
            <Link to="../viewAllBulletins" >
                View all bulletin posts
            </Link>
        </div>
    )
}