import React from "react"
import Layout from "./src/components/layout"

export function wrapPageElement({ element, props }) {
    const Layout = element.type.Layout ?? React.Fragment
    return <Layout {...props}>{element}</Layout>
  }