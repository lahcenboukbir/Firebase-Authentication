import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Error from "../pages/Error";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/Firebase";

const SignUp = () => {
    const [displayName, setdisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null);


    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleUpdateProfile = () => {
        updateProfile(auth.currentUser, {
            displayName: setdisplayName,
        })
            .then(() => {
                // Profile updated!
            })
            .catch((error) => {
                // An error occurred
                console.log(error);
            });
    };

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up
                // const user = userCredential.user;
                setEmail("");
                setPassword("");
                handleUpdateProfile();
                navigate("/");
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
    };

    if (loading) {
        return <p>loading...</p>;
    }

    if (user) {
        return <Error />;
    }

    if (!user) {
        return (
            <>
                <NavBar />

                <div className="signup-container">
                    <div className="signup-header">
                        <h1>Sign Up</h1>
                    </div>

                    <div className="signup-login">
                        <p>
                            Already have an account?{" "}
                            <Link to="/sign-in" className="signup-link">
                                Sign In
                            </Link>
                        </p>
                    </div>

                    <form className="signup-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">
                                Name:
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="form-input"
                                placeholder="Name"
                                value={displayName}
                                onChange={(e) => {
                                    setdisplayName(e.target.value);
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="form-label">
                                E-mail
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="form-input"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="form-input"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </div>

                        {errorMessage && (
                            <div className="error-message">
                                <p>{errorMessage}</p>
                            </div>
                        )}

                        <div className="form-group">
                            <button
                                type="submit"
                                className="form-submit"
                                onClick={handleSignUp}
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>

                <Footer />
            </>
        );
    }
};

export default SignUp;
