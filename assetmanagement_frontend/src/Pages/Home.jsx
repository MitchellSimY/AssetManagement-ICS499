import * as React from "react";
import BulletinCards from "../Components/BulletinCards"


export default function Home() {

    return (
        <div>
            <h2>
                Home Page
                <div style={{paddingLeft: '1em' }}>
                    <BulletinCards />
                </div>
            </h2>
        </div>
    );
}
