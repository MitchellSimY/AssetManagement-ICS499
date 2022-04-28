import * as React from "react";
import { useState } from "react";
import ReactRecaptcha from "react-recaptcha";
import { Link, useNavigate } from "react-router-dom";


export default function Register() {
    // Styles
    const styles = {
        textAlign: 'center',
        paddingTop: '10rem',
        width: '30rem',
        margin: 'auto',
    }

    // States
    const [isAdmin, setIsAdmin] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [phone, setPhone] = useState("");
    const [userName, setUserName] = useState("");
    const [adminKey, setAdminKey] = useState("");
    const [captchaVerified, setCaptchaVerified] = useState(false)

    // Error states
    const [successfulAdd, setSuccessfulAdd] = useState(true);
    const [warningError, setWarningError] = useState(true);
    const [error, setError] = useState("");

    let navigate = useNavigate();

    // Function
    function handleRegister(e) {
        const user = { firstName, lastName, email, password, phone, userName, isAdmin };

        if (adminKey !== "iAdmin" && isAdmin) {
            setWarningError(false);
            setError("The Admin key you entered is incorrect")
            return
        }

        if (password.length < 8 ) {
            setWarningError(false);
            setError("The password you've entered is not longer than 8 characters")
            return
        }

        if (password !== passwordConfirm) {
            setWarningError(false);
            setError("The passwords you've entered do not match!")

        } else {
            fetch("http://localhost:8080/user/add", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(user),
            })
                .then(response => response.json())
                .then(data => {
                    if (data) {
                        navigate("../")
                    } else {
                        setSuccessfulAdd(false);
                    }
                });
        }
    }

    function handleIsAdmin(e) {
        setIsAdmin(!isAdmin);
    }

    function verifyCaptcha(e) {
        setCaptchaVerified(true);
    }


    return (
        <div style={styles}>
            <h2>
                Registration Form
            </h2>
            <form required>

                {/* Username Checker */}
                {successfulAdd ? "" : <div class="alert alert-danger" role="alert">
                    The username you've entered has been taken
                </div>}

                {/* Password checker */}
                {warningError ? "" : <div class="alert alert-warning" role="alert">
                    {`${error}`}
                </div>}



                <div class="input-group mb-3">
                    {/* USERNAME */}
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Desired Username</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => setUserName(e.target.value)} required />
                </div>

                {/* PASSWORD */}
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Password</span>
                    </div>
                    <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" onChange={(e) => setPassword(e.target.value)} required />
                </div>

                {/* CONFIRM PASSWORD */}
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Confirm Password</span>
                    </div>
                    <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"
                        onChange={(e) => setPasswordConfirm(e.target.value)} required />
                </div>

                {/* CONFIRM EMAIL */}
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1" >Email</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" onChange={(e) => setEmail(e.target.value)} required/>
                </div>

                {/* CONFIRM Name */}
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">First Name</span>
                    </div>
                    <input type="text" class="form-control" placeholder="First Name" aria-label="First Name" aria-describedby="basic-addon1" onChange={(e) => setFirstName(e.target.value)} required />
                </div>

                {/* CONFIRM LAST NAME */}
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Last Name</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Last Name" aria-label="Last Name" aria-describedby="basic-addon1" onChange={(e) => setlastName(e.target.value)} required />
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Phone</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Phone" aria-label="Phone" aria-describedby="basic-addon1" required onChange={(e) => setPhone(e.target.value)} />
                </div>

                {/* Is the user an admin? */}
                <div class="input-group mb-3">
                    <div class="input-group-prepend">

                        <div class="input-group-text">
                            Are you an admin? {"  "}
                            <input type="checkbox" aria-label="Checkbox for following text input" onChange={handleIsAdmin} />
                        </div>
                    </div> {" "}
                    {isAdmin ?
                        <input type="text" class="form-control" aria-label="Text input with checkbox" placeholder="Admin Key" onChange={(e) => setAdminKey(e.target.value)}/> : " "}

                </div>

                <div style={{ paddingLeft: '5rem' }} required>
                    <ReactRecaptcha
                        sitekey="6Ld1pH4eAAAAAFIC4kFwj442OYAwlqjlw4f4kMZC" 
                        verifyCallback={verifyCaptcha} />
                </div>


                <br />
                {/* Bypassing Captcha */}
                <button disabled={!captchaVerified} type="button" class="btn btn-primary" onClick={handleRegister}>Create Account</button>{" "}

                {/* <button type="button" class="btn btn-primary" onClick={handleRegister}>Create Account</button>{" "} */}
            </form>
        </div>
    );
}
