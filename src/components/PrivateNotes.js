import React from "react"
import InfoBanner from "./InfoBanner";
import { useHistory } from "react-router-dom";

function PrivateNotes() {

    let history = useHistory();

    function handleSignout(e) {
        history.push('/signin');
    }

    return(
        <div className="form-wrapper">
            <InfoBanner text="You are logged into your Private Notest page." success /> 
            <button onClick={handleSignout}>Sign out</button>
        </div>
    );
}

export default PrivateNotes

