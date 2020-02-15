import React from "react"
import InfoBanner from "./InfoBanner";
import { useHistory} from "react-router-dom";

function SignInForm() {

    let history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        history.push('/notes');
    }

    return(
        <div className="form-wrapper">
            <InfoBanner text="You are currently not logged in!"/>
            <div className="singin-form">
                <h2>Sign in</h2>
                <form onSubmit={handleSubmit}>
                    <div className="username">
                        <label htmlFor="username">Username</label>
                        <input name="username" className="form-control" type="text" />
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" />
                    </div>
                    <div className="submit">
                    <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignInForm