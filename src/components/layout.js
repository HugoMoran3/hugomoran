import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./navbar"
import Footer from "./footer"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
    <React.StrictMode>
    <Header />
    <Navbar />
      <div className="content">
        <main>{children}</main>

      </div>
    </React.StrictMode>
    <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
