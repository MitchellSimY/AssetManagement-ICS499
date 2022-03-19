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
    const [phone, setPhone] = useState("");
    const [userName, setUserName] = useState("");

    let navigate = useNavigate();

    // Function
    function handleRegister(e) {
        const user = { firstName, lastName, email, password, phone, userName, isAdmin };

        // Checking to ensure all fields are correct
        // if ()

        console.table(user);
        fetch("http://localhost:8080/user/add", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(user),
        }).then(() => {
            console.log("New user added!");
        });

        navigate("../home")
    }

    function handleIsAdmin(e) {
        setIsAdmin(!isAdmin);
    }

    return (
        <div style={styles}>
            <h2>
                Registration Form
            </h2>
            <form required>
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
                    <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" required />
                </div>

                {/* CONFIRM EMAIL */}
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1" >Email</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" onChange={(e) => setEmail(e.target.value)} />
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

                <div class="input-group mb-3">
                    <div class="input-group-prepend">

                        <div class="input-group-text">
                            Are you an admin? {"  "}
                            <input type="checkbox" aria-label="Checkbox for following text input" onChange={handleIsAdmin} />
                        </div>
                    </div> {" "}
                    {isAdmin ?
                        <input type="text" class="form-control" aria-label="Text input with checkbox" placeholder="Admin Key" /> : " "}

                </div>

                <div style={{ paddingLeft: '5rem' }}>
                    <ReactRecaptcha
                        sitekey="6Ld1pH4eAAAAAFIC4kFwj442OYAwlqjlw4f4kMZC" required />
                </div>


                <br />
                <Link to="/">
                    <button type="submit" class="btn btn-primary" onSubmit={handleRegister}>Create Account</button>{" "}
                </Link>




            </form>
        </div>
    );
}
