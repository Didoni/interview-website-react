import React from "react"
import InfoBanner from "./InfoBanner";

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '' , password: ''};

        this.authenticate = this.authenticate.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }
    
    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    authenticate(e) {
        e.preventDefault();
        const credentials = this.state;
        fetch('http://localhost:3333/login', {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
              'Content-Type': 'application/json'
            },
        })
        .then(response => { 
                if (response.ok) {
                    return response.json(); 
                }
                throw new Error('Request failed!');
            }, networkError => {
                throw new Error('Request failed due to network error!');
        })
        .then(jsonResponse => { 
            console.log(jsonResponse);
            this.props.onSuccessfulAuth(credentials.username);
            this.props.history.push('/notes');
        })
        .catch(error => {
            this.props.onFailedAuth();
            console.log(error.message);
            this.props.history.push('/signin');
        });

        this.setState({username: "", password: ""});
    }

    render() {
        const errorMessage = this.props.errorMessage;
        const banner = errorMessage ? 
              <InfoBanner text={errorMessage} failure />
            : <InfoBanner text="You are currently not logged in!"/>;

        return(
            <div className="form-wrapper">
                {banner}
                <h2>{this.props.loggedInStatus}</h2>
                <div className="singin-form">
                    <h2>Sign in</h2>
                    <form onSubmit={this.authenticate}>
                        <div className="username">
                            <label>Username:
                                <input name="username" type="text" value={this.state.username} onChange={this.handleUsernameChange} />
                            </label>
                        </div>
                        <div className="password">
                            <label>Password:
                                <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                            </label>
                        </div>
                        <div className="submit">
                        <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignInForm