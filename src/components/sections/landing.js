import * as React from "react"
import { Link } from "gatsby"
import { Motion, spring, presets } from "react-motion"


const Landing = () => {
    return(
        <div className="landing">
            <Motion
            defaultStyle={{
                opacity: 0,
                translateY: 30
            }}
            style={{
                opacity: spring(1),
                translateY: spring(0, presets.wobbly)
            }}
            >
            {interpolatedStyles => (
                <div
                style={{
                    transform: `translateY(${interpolatedStyles.translateY}px)`,
                    opacity: interpolatedStyles.opacity
                }}
                >
                <h1>My name is</h1><h4> Hugo Moran.</h4>
                <h2>
                    I have a Diploma of Website Development and passion for creating websites.
                </h2>
                <p>
                I specialize in front end development but I have a rock solid understanding of back end work too.
                </p>
                <Link 
                to="#contact"
                className="linkbutton"
                >
                    Contact Me
                </Link>
                </div>
            )}
            </Motion>
        </div>
    )
}

export default Landing