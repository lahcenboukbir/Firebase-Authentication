import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <>
            <div className="error-container">
                <h1 className="error-title">Oops!</h1>
                <p className="error-message">
                    Something went wrong or the page you're looking for does not exist.
                </p>
                <Link to="/" className="error-home-link">Go Back to Home</Link>
            </div>
        </>
    )
}

export default Error
