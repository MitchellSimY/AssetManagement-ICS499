import * as React from "react";
import Offcanvas from 'react-bootstrap/Offcanvas'

export default function SideBar({showSideBar, setShowSideBar}) {

    function handleClose(e) {
        setShowSideBar(false);
    }
  
    return (
      <>
        <Offcanvas show={showSideBar} width={1} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Asset Management</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
              Lorum Ipsum
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }