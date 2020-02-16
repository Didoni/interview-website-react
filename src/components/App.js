import React from "react"
import { 
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from "react-router-dom"
import PrivateNotes from "./PrivateNotes"
import SignInForm from "./SignInForm"

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            errorMessage: "",
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
        };

        this.onSuccessfulAuth = this.onSuccessfulAuth.bind(this);
        this.onFailedAuth = this.onFailedAuth.bind(this);
        this.onSignout = this.onSignout.bind(this);
    }

    onSuccessfulAuth(username) {
        this.setState({
            loggedInStatus: "LOGGED_IN",
            user: username,
            errorMessage: ""
        });
    }
    
    onFailedAuth() {
        this.setState({
           errorMessage: "Could not sign in." 
        });
        console.log("failed Sign in");
    }

    onSignout() {
        this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
        });
    }

    render() {
        return (
            <div>
                <h1>Simple Web Page</h1>
                <Router>
                    <div>
                        <ul>
                            <li>
                                <Link to="/signin">Sign in Page</Link>
                            </li>
                            <li>
                                <Link to="/notes">Protected Page</Link>
                            </li>
                        </ul>
                        <Switch>
                            <Route
                                exact
                                path="/signin"
                                render={props => (
                                    <SignInForm
                                        { ... props}
                                        loggedInStatus={this.state.loggedInStatus}
                                        onSuccessfulAuth={this.onSuccessfulAuth} 
                                        onFailedAuth={this.onFailedAuth}
                                        errorMessage={this.state.errorMessage}
                                    />
                                )}
                                                            
                            />
                            <Route 
                                exact
                                path="/notes"
                                render={props => (
                                    <PrivateNotes
                                        { ... props}
                                        loggedInStatus={this.state.loggedInStatus}
                                        user={this.state.user}
                                        onSignout={this.onSignout}
                                    />
                                )}
                            />  
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App