import * as React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Logo from "../images/portfolio-logo.svg"

const Navbar = () => {
    return (
        <nav className="navbar-main" id="navbar-id">
        <div className="navbar-container" id="hugo-title">
            <div className="navbar-title">
                <Link
                to="/"
                className="navbar-link"
                >
                    Hugo
                </Link>
            </div>
        </div>
        <div className="navbar-container">
            <ul className="navbar">
                
                <li className="navbar-element">
                    <Link
                    to="#about"
                    className="navbar-link"
                    >About</Link>
                </li>
                <li className="navbar-element">
                    <Link
                    to="#project"
                    className="navbar-link"
                    >Projects</Link >
                </li>
                <li className="navbar-element">
                    <Link
                    to="#contact"
                    className="navbar-link"
                    >Contact</Link>
                </li>
                <li className="navbar-element">

                    <a
                    target="_blank"
                    className="navbar-link"
                    href="https://docs.google.com/document/d/1Qxo-Dd27Uix5kplz78sdbmHCLk-MqoESMMY_QvXFvYQ/edit?usp=sharing">
                        Resume
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    )

}
export default Navbar