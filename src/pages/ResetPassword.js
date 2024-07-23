import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Error from "../pages/Error";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase/Firebase";

const ResetPassword = () => {
    const [user, loading] = useAuthState(auth);
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                setSuccessMessage(true);
                setError(null);
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
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
                <div className="reset-password-container">
                    <h1 className="reset-password-title">Reset your password</h1>
                    <div className="reset-password-info">
                        <p>
                            If the account exists, we will email you instructions to reset the
                            password.
                        </p>
                    </div>
                    <form className="reset-password-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">
                                E-mail
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="form-input"
                                placeholder="E-mail"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>

                        {error && (
                            <div className="error-message">
                                <p>{error}</p>
                            </div>
                        )}

                        <div className="form-actions">
                            {!successMessage && (
                                <>
                                    <button type="button" className="form-button">
                                        <Link to="/sign-in" className="form-link">
                                            Return to Sign In
                                        </Link>
                                    </button>
                                    <button
                                        type="submit"
                                        className="form-button form-button-primary"
                                        onClick={handleResetPassword}
                                    >
                                        Reset Password
                                    </button>
                                </>
                            )}

                            {successMessage && (
                                <>
                                    <p>We've sent an email to with instructions.</p>
                                    <button type="button" className="form-button">
                                        <Link to="/sign-in" className="form-link">
                                            Return to Sign In
                                        </Link>
                                    </button>
                                </>
                            )}
                        </div>
                    </form>
                </div>

                <Footer />
            </>
        );
    }
};

export default ResetPassword;
