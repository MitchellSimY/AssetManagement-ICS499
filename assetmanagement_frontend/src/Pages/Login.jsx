import * as React from "react";
import { useContext, useState } from "react";
import ReactRecaptcha from "react-recaptcha";
import { UserContext } from "../Components/UserContext";
import { Link } from "react-router-dom";



export default function Login() {

    const { user, setUser } = useContext(UserContext);

    const styles = {
        textAlign: 'center',
        paddingTop: '15rem',
        width: '30rem',
        margin: 'auto',
    }

    // States
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function handleSignIn(e) {
        e.preventDefault();
        fetch(`http://localhost:8080/user/getUserLogin/${userName}/${password}`)
            .then((res) => res.json())
            .then((result) => {
                setUser(result);
                console.log(user);
            });

        
    }

    function handleForgotPassword(e) {
        e.preventDefault();

    }

    /**
     * INvestigate "3 time rule"
     * 
     * Add functionality to buttons
     */
    return (
        <div style={styles}>
            <h2>
                Please login to continue
            </h2>
            <form onSubmit={handleSignIn}>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Username</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => setUserName(e.target.value)} required />
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Password</span>
                    </div>
                    <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <div style={{ paddingLeft: '5rem' }}>
                    {/* <ReactRecaptcha
                        sitekey="6Ld1pH4eAAAAAFIC4kFwj442OYAwlqjlw4f4kMZC"
                    /> */}
                </div>



                {/* <Link to="../"> */}
                    <button type="submit" onSubmit={handleSignIn}class="btn btn-primary">Sign In</button>{" "}
                {/* </Link> */}

                <button type="button" class="btn btn-secondary" onClick={handleForgotPassword}>Forgot Password</button>



            </form>
            <br />
            Don't have an account? <br />
            <Link to="../register">Register Now</Link>
        </div>
    );
}
