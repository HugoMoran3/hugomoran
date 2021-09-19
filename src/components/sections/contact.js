import * as React from "react"
import { Link } from "gatsby"


const Contact = () => {
    return(
        <div className="contact" id="contact">
            <h1>Contact me</h1>
            <p>I'm always open to new opportunities, let me know if you have anything you would like to discuss in the link below.
            </p>
            
            <a 
            href="mailto:hugo@hugomoran.com"
            className="linkbutton"
            >
                Email me here
            </a>
        </div>
    )
}

export default Contact