import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

import './style.scss'

const NavBar = () => {
  const data = useStaticQuery(graphql`
    query NavQuery {
      site {
        siteMetadata {
          title
          social {
            twitter
          }
        }
      }
    }
  `)

  const {
    site: {
      siteMetadata: {
        title,
      }
    }
  } = data;

  return (
    <header className="navbar__container">
      <h6 className="navbar__title">{title}</h6>
      <nav className="navbar__items">
        <Link to="/" >Home</Link>
        <Link to="/blog" >Blog</Link>
      </nav>
    </header>
  )
}

export default NavBar;
