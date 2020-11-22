import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import ThemeSwitch from '../ThemeSwitch';

import './style.scss';

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
  `);

  const {
    site: {
      siteMetadata: {
        title,
      },
    },
  } = data;

  return (
    <header className="navbar__container">
      <Link className="navbar__title" to="/"><h6>{title}</h6></Link>
      <nav className="navbar__items">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <ThemeSwitch />
      </nav>
    </header>
  );
};

export default NavBar;
