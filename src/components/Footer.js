import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-social">
          <Link to="https://www.linkedin.com/in/lahcen-boukbir/" className="footer-link">LinkedIn</Link>
          <Link to="https://github.com/lahcenboukbir" className="footer-link">GitHub</Link>
          <Link to="https://x.com/lahcen_boukbir" className="footer-link">X</Link>
        </div>
        <nav className="footer-nav">
          <ul className="footer-menu">
            <li className="footer-item">
              <Link to="/" className="footer-link">Home</Link>
            </li>
            <li className="footer-item">
              <Link to="/about" className="footer-link">About</Link>
            </li>
            <li className="footer-item">
              <Link to="/contact" className="footer-link">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="footer-copyright">
          <p>Copyright © 2024 <Link to="/" className="footer-link">Firebase</Link></p>
        </div>
      </footer>

    </>
  )
}

export default Footer
