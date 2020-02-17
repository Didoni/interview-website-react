import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import PrivateNotes from './PrivateNotes';
import SignInForm from './SignInForm';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      errorMessage: '',
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {},
    };

    this.onSuccessfulAuth = this.onSuccessfulAuth.bind(this);
    this.onFailedAuth = this.onFailedAuth.bind(this);
    this.onSignout = this.onSignout.bind(this);
  }

  componentDidMount() {
    const loggedIn = sessionStorage.getItem('loggedInStatus') === 'LOGGED_IN';
    if (loggedIn) {
      const user = sessionStorage.getItem('user');
      this.setState({
        user,
        loggedInStatus: 'LOGGED_IN',
      });
    }
  }

  onSuccessfulAuth(username) {
    this.setState({
      loggedInStatus: 'LOGGED_IN',
      user: username,
      errorMessage: '',
    });
    sessionStorage.setItem('user', username);
    sessionStorage.setItem('loggedInStatus', 'LOGGED_IN');
  }

  onFailedAuth() {
    this.setState({
      errorMessage: 'Could not sign in',
    });
  }

  onSignout() {
    this.setState({
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {},
    });
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('loggedInStatus');
  }

  render() {
    const { loggedInStatus, errorMessage, user } = this.state;
    return (
      <div>
        <Typography align="center" variant="h3" paragraph>
          Simple Web Page
        </Typography>
        <Router>
          <div>
            <Switch>
              <Route
                exact
                path="/signin"
                render={props =>
                  loggedInStatus === 'NOT_LOGGED_IN' ? (
                    <SignInForm
                      {...props}
                      loggedInStatus={loggedInStatus}
                      onSuccessfulAuth={this.onSuccessfulAuth}
                      onFailedAuth={this.onFailedAuth}
                      errorMessage={errorMessage}
                    />
                  ) : (
                    <Redirect to="/notes" />
                  )
                }
              />
              <Route
                exact
                path="/notes"
                render={props =>
                  loggedInStatus === 'LOGGED_IN' ? (
                    <PrivateNotes {...props} loggedInStatus={loggedInStatus} user={user} onSignout={this.onSignout} />
                  ) : (
                    <Redirect to="/signin" />
                  )
                }
              />
              <Redirect to="/notes" />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
