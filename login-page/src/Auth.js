import React from "react"

export default function(props){
    return (<div className="Auth-form-container">
        <form className="Auth-form">
            <div className="Auth-form-content">
                <h3 className="Auth-form-title"> Sign In</h3>

                <div className="form-group mt-3">
                    <input type="email" className="form-control mt-1"
                    placeholder="Your email"/>
                </div>

                <div className="form-group mt-3">
                    <input type="password" className="form-control mt-1"
                    placeholder="Password"/>
                </div>
                <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                    <p className="forgot-password text-right mt-2">
                        <a href="#">Forgot password?</a>
                    </p>

                </div>
            </div>
        </form>

    </div>);
}