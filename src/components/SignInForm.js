import React from "react"

function SignInForm() {
    return(
        <div className="form-wrapper">
            <div className="singin-form">
                <h2>Sign in</h2>
                <form>
                    <div className="username">
                        <label htmlFor="username">Username</label>
                        <input name="username" className="form-control" type="text" />
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" />
                    </div>
                    <div className="submit">
                        <button>Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignInForm