import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PostsList from '../components/PostsList';
import SEO from '../components/seo';

const BlogPage = ({
  data: {
    site: { siteMetadata: { title, description } },
    blogPosts: { edges },
  },
  location,
}) => (
  <Layout location={location}>
    <SEO title="All Posts" />
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
    <h2>Blog Posts &darr;</h2>
    <PostsList posts={edges} />
  </Layout>
);

export default BlogPage;
export const pageQuery = graphql`
  query blogPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    blogPosts: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            thumbnail
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
