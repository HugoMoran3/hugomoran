import * as React from "react"
import { Link } from "gatsby"


const Landing = () => {
    return(
        <div className="landing">
            <h1>My name is Hugo Moran.</h1>
            <h2>
                I have a Diploma of Website Development and passion for creating websites.
            </h2>
            <p>
            I specialize in front end development but I have a rock solid understanding of back end work too.
            </p>
            <Link 
            to="/"
            className="linkbutton"
            >
                Contact Me
            </Link>
        </div>
    )
}

export default Landing