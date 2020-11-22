import React from 'react';
import { graphql } from 'gatsby';

import PostsGrid from '../components/PostsGrid';
import Layout from '../components/Layout';
import SEO from '../components/seo';

import './style.scss';

const BlogIndex = ({ data, location }) => {
  const { site: { siteMetadata: { title, email, description } } } = data;
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout location={location} title={title}>
      <SEO title="Home" />
      <section className="about__section">
        <img src="pexels-pixabay-270694.jpg" alt="" />
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
          <a href={`mailto:${email}`} className="about__cta">Work with Me &#8594;</a>
        </div>
      </section>
      <PostsGrid posts={posts} />
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        email
      }
    }
    allMarkdownRemark(
      limit: 3, 
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
          thumbnail
        }
      }
    }
  }
`;
