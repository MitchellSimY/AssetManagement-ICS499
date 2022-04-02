import * as React from "react";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../Components/UserContext";
import AddBulletin from "../BulletinBoard/AddBulletin.jsx";
import Grid from '@mui/material/Grid';
import BulletinCard from "../BulletinBoard/BulletinCards.jsx"


export default function Board() {

  // State
  const [addBulletinPop, setAddBulletinPopup] = useState(false);
  const [allBulletins, setAllBulletins] = useState();

  const { user } = useContext(UserContext)

  // On page load
  useEffect(() => {
    fetch(`http://localhost:8080/bulletin/getAllBulletins`)
      .then((res) => res.json())
      .then((result) => {
        setAllBulletins(result.reverse());
      });
  });

  function createBulletin(e) {
    e.preventDefault();
    setAddBulletinPopup(!addBulletinPop);
  }

  return (
    <div style={{ paddingLeft: '20rem', paddingRight: '20rem' }}>
      <br />

      {user?.isAdmin ? <button onClick={createBulletin} class="btn btn-success">Create Bulletin</button> : null}

      {addBulletinPop ? <AddBulletin /> : ""}
      <br />
      <br />
      <Grid container spacing={2}>

        {allBulletins ?
          allBulletins.map((bulletin) => (
            <Grid item xs={3}>
              <BulletinCard title={bulletin.title}
                announcementType={bulletin.announcementType}
                bulletinText={bulletin.message}
                bulletinId={bulletin.id}
                enableDelete={true} />
            </Grid>
          )) : ""
        }

      </Grid>
    </div>
  );
}
