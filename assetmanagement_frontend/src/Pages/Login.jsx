import * as React from "react";
import ReactRecaptcha from "react-recaptcha";


export default function Login() {

    const styles = {
        textAlign: 'center',
        paddingTop: '15rem',
        width: '30rem',
        margin: 'auto',
    }

    function handleRegister(e) {
        console.log("Register button hit");
    }

    return (
        <div style={styles}>
            <h2>
                Please login to continue
            </h2>
            <form>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Username</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Password</span>
                    </div>
                    <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
                </div>

                <div style={{paddingLeft: '5rem'}}>
                    <ReactRecaptcha
                        sitekey="6Ld1pH4eAAAAAFIC4kFwj442OYAwlqjlw4f4kMZC" required
                    />
                </div>


                <button type="button" class="btn btn-primary">Sign In</button>{" "}
                <button type="button" class="btn btn-secondary">Forgot Password</button>


            </form>
            <br />
            Don't have an account? <br />
            <a onClick={handleRegister} href="../register">Register now</a>
        </div>
    );
}
