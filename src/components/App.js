import React from "react"
import { 
    BrowserRouter as Router,
    Switch,
    Link,
    Route,
    Redirect
} from "react-router-dom"
import PrivateNotes from "./PrivateNotes"
import SignInForm from "./SignInForm"
import Typography from '@material-ui/core/Typography';

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

    componentDidMount() {
        const loggedIn = sessionStorage.getItem('loggedInStatus') === 'LOGGED_IN';
        if(loggedIn) {
            const user = sessionStorage.getItem('user');
            this.setState({ 
                user: user,
                loggedInStatus: "LOGGED_IN"
            });
        }
    }

    onSuccessfulAuth(username) {
        this.setState({
            loggedInStatus: "LOGGED_IN",
            user: username,
            errorMessage: ""
        });
        sessionStorage.setItem('user', username);
        sessionStorage.setItem('loggedInStatus', "LOGGED_IN");
    }
    
    onFailedAuth() {
        this.setState({
           errorMessage: "Could not sign in" 
        });
    }

    onSignout() {
        this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
        });
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('loggedInStatus');
    }

    render() {
        return (
            <div>
                <Typography align="center" variant="h3">Simple Web Page</Typography>
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
                                path= "/signin"
                                render={
                                    props => 
                                    this.state.loggedInStatus === "NOT_LOGGED_IN" ? 
                                    (   
                                        <SignInForm { ... props}
                                        loggedInStatus={this.state.loggedInStatus}
                                        onSuccessfulAuth={this.onSuccessfulAuth} 
                                        onFailedAuth={this.onFailedAuth}
                                        errorMessage={this.state.errorMessage}/> 
                                    ) :
                                    (   
                                        <Redirect to="/notes" /> 
                                    )
                                }
                            />
                            <Route 
                                exact
                                path="/notes"
                                render={
                                    props => 
                                    this.state.loggedInStatus === "LOGGED_IN" ? 
                                    (   
                                        <PrivateNotes
                                            { ... props}
                                            loggedInStatus={this.state.loggedInStatus}
                                            user={this.state.user}
                                            onSignout={this.onSignout}
                                        />
                                    ) :
                                    (   
                                        <Redirect to="/signin" /> 
                                    )
                                }
                            />  
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App