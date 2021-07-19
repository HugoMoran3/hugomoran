import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/global.scss"

import Contact from "../components/sections/contact"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <p>Welcome to my site.</p>
    <p>How are you.</p>
    <Contact />
  </Layout>
)

export default IndexPage
