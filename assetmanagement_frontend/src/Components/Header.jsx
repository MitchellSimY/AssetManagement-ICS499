import * as React from "react";


export default function Header() {

    return (
        <div>
            <nav class="navbar navbar-light justify-content-between" style={{backgroundColor: '#228c45'}}>
                <a class="navbar-brand" style={{paddingLeft: '1em'}}>Navbar</a>

                <div class="form-inline" >
                    <div style={{ paddingRight: '1em' }}>
                        <p>Hello</p>
                    </div>

                </div>
            </nav>
        </div>
    );
}
