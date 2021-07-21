import * as React from "react"
import "../styles/global.scss"


import Layout from "../components/layout"
import Contact from "../components/sections/contact"
import Projects from "../components/sections/projects"
import About from "../components/sections/about"
import Landing from "../components/sections/landing"
import Navbar from "../components/navbar"

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Landing />
    <Contact />
    <Projects />
    <About />
  </Layout>
)

export default IndexPage
