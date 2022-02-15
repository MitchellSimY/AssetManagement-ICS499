import * as React from "react";
import { useState } from "react";
import ReactRecaptcha from "react-recaptcha";


export default function Register() {

    // Styles
    const styles = {
        textAlign: 'center',
        paddingTop: '10rem',
        width: '30rem',
        margin: 'auto',
    }

    // States
    const [isAdminChecked, setIsAdminChecked] = useState(false);


    // Function
    function handleRegister(e) {
        console.log("Register button hit");
    }

    function handleIsAdmin(e) {
        setIsAdminChecked(!isAdminChecked);
    }

    return (
        <div style={styles}>
            <h2>
                Registration Form
            </h2>
            <form>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Desired Username</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Password</span>
                    </div>
                    <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
                </div>


                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Confirm Password</span>
                    </div>
                    <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Email</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" />
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Phone</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Phone" aria-label="Phone" aria-describedby="basic-addon1" />
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">

                        <div class="input-group-text">
                            Are you an admin? {"  "}
                            <input type="checkbox" aria-label="Checkbox for following text input" onChange={handleIsAdmin} />
                        </div>
                    </div> {" "}
                    {isAdminChecked ?
                        <input type="text" class="form-control" aria-label="Text input with checkbox" placeholder="Admin Key" /> : " "}

                </div>

                <div style={{ paddingLeft: '5rem' }}>
                    <ReactRecaptcha
                        sitekey="6Ld1pH4eAAAAAFIC4kFwj442OYAwlqjlw4f4kMZC" required />
                </div>


                <br />
                <button type="button" class="btn btn-primary">Create Account</button>{" "}




            </form>
        </div>
    );
}
