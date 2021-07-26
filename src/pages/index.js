import * as React from "react"
import Helmet from "react-helmet"

import "../styles/global.scss"


import Layout from "../components/layout"
import Contact from "../components/sections/contact"
import Projects from "../components/sections/projects"
import About from "../components/sections/about"
import Landing from "../components/sections/landing"

const IndexPage = () => (
  <div className="indexpage">
    <Landing />
    <Projects />
    <About />
    <Contact />
    <Helmet>
        <script type="text/javascript">
        {`
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar-id").style.top = "0";
            } else {
                document.getElementById("navbar-id").style.top = "-80px";
            }
            prevScrollpos = currentScrollPos;
        }
        
        `}
        </script>
    </Helmet>
  </div>
)

IndexPage.Layout = Layout

export default IndexPage
