import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/Firebase";

const NavBar = () => {
    const lists = ["Home", "About", "Contact"];
    const paths = ["/", "/about", "/contact"];

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                navigate("/");
            })
            .catch((error) => {
                // An error happened.
            });
    };

    return (
        <>
            <header className="navbar-header">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-brand-link">
                        Firebase Authentication
                    </Link>
                </div>

                <nav className="navbar-nav">
                    <ul className="navbar-menu">
                        {lists.map((list, index) => {
                            return (
                                <li key={index} className="navbar-item">
                                    <Link to={paths[index]} className="navbar-link">
                                        {list}
                                    </Link>
                                </li>
                            );
                        })}
                        {user && (
                            <li className="navbar-item">
                                <Link to="/profile" className="navbar-link">
                                    Profile
                                </Link>
                            </li>
                        )}
                    </ul>

                    <div className="navbar-buttons">
                        {!user && (
                            <>
                                <button className="navbar-button">
                                    <Link to="/sign-up" className="navbar-button-link">
                                        Sign Up
                                    </Link>
                                </button>
                                <button className="navbar-button">
                                    <Link to="/sign-in" className="navbar-button-link">
                                        Sign In
                                    </Link>
                                </button>
                            </>
                        )}
                        {user && (
                            <button className="navbar-button" onClick={handleSignOut}>
                                Sign Out
                            </button>
                        )}
                    </div>
                </nav>


            </header>
        </>
    );
};

export default NavBar;
