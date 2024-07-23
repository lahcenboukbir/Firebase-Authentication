import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Error from "../pages/Error";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
import { updateProfile } from "firebase/auth";
import { sendEmailVerification } from "firebase/auth";
import { deleteUser } from "firebase/auth";
import { auth } from "../Firebase/Firebase";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const [user, loading] = useAuthState(auth);
    const [displayName, setdisplayName] = useState("");
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleUpdateProfile = async () => {
        if (displayName.trim() === "") {
            setErrorMessage("Display name cannot be empty.");
            return;
        }

        updateProfile(auth.currentUser, {
            displayName: displayName,
        })
            .then(() => {
                // Profile updated!
                setdisplayName("")
                setSuccessMessage("Profile updated successfully!");
                setErrorMessage(null);

            })
            .catch((error) => {
                // An error occurred
                setSuccessMessage(null);
                setErrorMessage("An error occurred while updating the profile.");
            });
    };

    const handleSendVerificationEmail = () => {
        sendEmailVerification(auth.currentUser).then(() => {
            // Email verification sent!
            setSuccessMessage("Verification email sent successfully!");
        }).catch(() => {
            setErrorMessage("An error occurred while sending verification email.");
        });
    };

    const handleDeleteUser = () => {
        deleteUser(user)
            .then(() => {
                // User deleted.
                navigate("/")
            })
            .catch((error) => {
                // An error ocurred
                setErrorMessage("An error occurred while deleting the profile.");
            });
    };

    if (loading) {
        return <p>loading...</p>;
    }

    if (!user) {
        return <Error />;
    }

    if (user) {
        return (
            <>
                <NavBar />
                <div className="profile-container">
                    <h1 className="profile-title">Profile</h1>
                    <div className="profile-info">
                        <p className="profile-item">
                            <strong>Email:</strong> {user.email}
                        </p>
                        <p className="profile-item">
                            <strong>Display Name:</strong> {user.displayName}
                        </p>
                        <p className="profile-item">
                            <strong>Change Name:</strong>
                            <input
                                type="text"
                                value={displayName}
                                className="profile-input"
                                onChange={(e) => {
                                    setdisplayName(e.target.value);
                                }}
                            />
                        </p>
                        <p className="profile-item">
                            <strong>Email Verified:</strong>{" "}
                            {user.emailVerified ? <i class="fa-solid fa-check"></i> : <i class="fa-solid fa-x"></i>}
                        </p>
                    </div>

                    <div className="message-container">
                        {successMessage && <p className="success-message">{successMessage}</p>}
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </div>

                    <div className="profile-actions">
                        <button className="profile-button" onClick={handleUpdateProfile} disabled={displayName.trim() === ""}>
                            Update Profile
                        </button>
                        <button
                            className="profile-button"
                            onClick={handleSendVerificationEmail}
                        >
                            Send Verification Email
                        </button>
                        <button
                            className="profile-button profile-button-danger"
                            onClick={handleDeleteUser}
                        >
                            Delete User
                        </button>
                    </div>
                </div>

                <Footer />
            </>
        );
    }
};

export default Profile;
