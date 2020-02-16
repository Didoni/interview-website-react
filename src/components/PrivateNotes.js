import React from "react"
import InfoBanner from "./InfoBanner";
import Button from '@material-ui/core/Button';

function PrivateNotes(props)  {

    function handleSignout(e) {
        props.onSignout();
        props.history.push('/signin');
    }

    const welcomeText = "Welcome " + props.user  + ". You are logged into your Private Notest page.";
    return(
        <div className="form-wrapper">
            <InfoBanner text={welcomeText} success>
                <Button color="inherit" onClick={handleSignout}>Sign out</Button>
            </InfoBanner>
        </div>
    );
}

export default PrivateNotes