import * as React from "react"
import { Link } from "gatsby"
import Logo from "../images/portfolio-logo.svg"

const Navbar = () => {
    return (
    <nav className="navbar-main">
        <div className="navbar-container">
            <div className="navbar-title">
                <Link
                to="/"
                className="navbar-link"
                >
                    <Logo />
                </Link>
            </div>
        </div>
        <div className="navbar-container">
            <ul className="navbar">
                
                <li className="navbar-element">
                    <Link
                    to="/"
                    className="navbar-link"
                    >About</Link>
                </li>
                <li className="navbar-element">
                    <Link
                    to="/"
                    className="navbar-link"
                    >Projects</Link>
                </li>
                <li className="navbar-element">
                    <Link
                    to="/"
                    className="navbar-link"
                    >Contact</Link>
                </li>
                <li className="navbar-element">
                    <Link
                    to="/"
                    >Resume</Link>
                </li>
            </ul>
        </div>
    </nav>
    )

}
export default Navbar