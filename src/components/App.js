import React from "react"
import { 
    BrowserRouter as Router,
    Switch,
    Link,
    Route
}
    from "react-router-dom"
import PrivateNotes from "./PrivateNotes"
import SignInForm from "./SignInForm"

function App() {
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
                        <Route path="/signin">
                            <SignInForm />
                        </Route>
                        <Route path="/notes">
                            <PrivateNotes />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App