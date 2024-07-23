import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Error from "../pages/Error";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/Firebase";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                // const user = userCredential.user;
                setEmail("")
                setPassword("")
                navigate("/")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                if (errorCode === "auth/invalid-email") {
                    setErrorMessage("The provided email is invalid. Please enter a valid email address.")
                } else if (errorCode === "auth/invalid-password") {
                    setErrorMessage("The provided password is invalid. It must be a string with at least six characters.")
                }
            });
    }

    if (loading) {
        return <p>loading...</p>
    }

    if (user) {
        return <Error />
    }

    if (!user) {
        return (
            <>
                <NavBar />

                <div className="signin-container">
                    <div className="signin-header">
                        <h1>Sign In</h1>
                    </div>

                    <div className="signin-signup">
                        <p>
                            Don't have an account?{" "}
                            <Link to="/sign-up" className="signin-link">
                                Sign Up
                            </Link>
                        </p>
                    </div>

                    <form className="signin-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">
                                E-mail
                            </label>
                            <input type="email" id="email" className="form-input" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input type="password" id="password" className="form-input" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        </div>

                        {errorMessage && (
                            <div className="error-message">
                                <p>{errorMessage}</p>
                            </div>
                        )}
                        
                        <div className="form-group form-actions">
                            <button type="button" className="form-button">
                                <Link to="/reset-password" className="form-link">
                                    Forgot Password?
                                </Link>
                            </button>
                            <button
                                type="submit"
                                className="form-button"
                                onClick={handleSignIn}
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>

                <Footer />
            </>
        );
    }

};

export default SignIn;
