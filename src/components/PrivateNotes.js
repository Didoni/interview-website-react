import React from "react"
import InfoBanner from "./InfoBanner";

class PrivateNotes extends React.Component  {

    constructor(props) {
        super(props);

        this.handleSignout = this.handleSignout.bind(this);
    }

    handleSignout(e) {
        this.props.onSignout();
        this.props.history.push('/signin');
    }

    render() {
        const welcomeText = "Welcome " + this.props.user  + ". You are logged into your Private Notest page.";
        return(
            <div className="form-wrapper">
                <InfoBanner text={welcomeText} success /> 
                <h2>{this.props.loggedInStatus}</h2>
                <button onClick={this.handleSignout}>Sign out</button>
            </div>
        );
    }
}

export default PrivateNotes

