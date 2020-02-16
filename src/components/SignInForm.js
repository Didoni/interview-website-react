import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import InfoBanner from './InfoBanner';

const styles = {
  paper: {
    marginTop: '64px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
  },
  form: {
    width: '100%',
    marginTop: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formInput: {
    width: '100%',
    marginTop: '25px',
    color: 'black',
  },
  submit: {
    margin: '25px 0 10px 0',
  },
  label: {
    color: 'black',
  },
};

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };

    this.authenticate = this.authenticate.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  authenticate(e) {
    e.preventDefault();
    const { history, onSuccessfulAuth, onFailedAuth } = this.props;
    const credentials = this.state;
    fetch('http://localhost:3333/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Request failed!');
      }, () => {
        throw new Error('Request failed due to network error!');
      })
      .then(() => {
        onSuccessfulAuth(credentials.username);
        history.push('/notes');
      })
      .catch(() => {
        onFailedAuth();
        history.push('/signin');
      });

    this.setState({ username: '', password: '' });
  }

  render() {
    const { classes, errorMessage } = this.props;
    const { username, password } = this.state;

    return (
      <div className="form-wrapper">
        <InfoBanner text="You are currently not logged in!" />
        <Container component="main" maxWidth="xs">
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            {errorMessage
              ? (
                <Typography component="h5" variant="overline" color="error">
                  {
                  errorMessage
                  }
                </Typography>
              ) : null }
            <form onSubmit={this.authenticate} className={classes.form}>
              <div className={classes.formInput}>
                <InputLabel className={classes.label}>
                  Username:
                  <Input
                    fullWidth
                    name="username"
                    type="text"
                    value={username}
                    onChange={this.handleUsernameChange}
                  />
                </InputLabel>
              </div>
              <div className={classes.formInput}>
                <InputLabel className={classes.label}>
                  Password:
                  <Input
                    fullWidth
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handlePasswordChange}
                  />
                </InputLabel>
              </div>
              <Button
                className={classes.submit}
                type="submit"
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </form>
          </Paper>
        </Container>
      </div>
    );
  }
}

SignInForm.propTypes = {
  onFailedAuth: PropTypes.func.isRequired,
  onSuccessfulAuth: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

SignInForm.defaultProps = {
  errorMessage: '',
};

export default withStyles(styles)(SignInForm);
