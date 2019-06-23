/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1296,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer className="contact-container">
          <ul>
            <li>Address</li>
            <li>123 North Main Street</li>
            <li>Gastonia, North Carolina</li>
            <li>28056</li>
          </ul>
          <ul>
            <li>Social Media</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
          <ul>
            <li>Contact Information</li>
            <li>
              <a href="mailto:brff19@gmail.com" target="_blank">brff19@gmail.com</a>
            </li>
            <li>
              <a href="tel:+9802406927" target="_blank">980-240-6927</a>
            </li>
            <li>
              <span>
                Nathan Price Ceilings <sup>&copy;</sup>{" "}
                {new Date().getFullYear()}
              </span>
            </li>
          </ul>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
