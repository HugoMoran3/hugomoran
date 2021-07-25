import * as React from "react"


import "../styles/global.scss"

import Card from "../components/card"
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
  </div>
)

IndexPage.Layout = Layout

export default IndexPage
