import * as React from "react";
import { useContext, useState, useEffect } from "react";
import { PersonCircle, HouseDoorFill } from "react-bootstrap-icons";
import { UserContext } from "../../Components/UserContext";
import { Link, useNavigate } from "react-router-dom";
import AddBulletin from "../../Components/AddBulletin";

export default function Board() {
  let nav = useNavigate()

  // State
  const [addBulletinPop, setAddBulletinPopup] = useState(false);
  const [allBulletins, setAllBulletins] = useState();

    // On page load
    useEffect(() => {
      fetch(`http://localhost:8080/bulletin/getAllBulletins`)
        .then((res) => res.json())
        .then((result) => {
          setAllBulletins(result);
        });
    });

  function createBulletin(e) {
    e.preventDefault();
    setAddBulletinPopup(!addBulletinPop);
  }

  function viewBulletins() {
    console.table(allBulletins)
  }

  var x = "Hello";

  return (
    <div>
      This is the bulletin Page
      <button onClick={createBulletin}>Create Bulletin</button>
      { addBulletinPop ? <AddBulletin /> : "" }


      <br />
      <br />
      <br />
      <button onClick={viewBulletins}>View all bulletins</button>

      {}

      {allBulletins ? `${allBulletins.title}` : "NO Data"}

    </div>
  );
}
