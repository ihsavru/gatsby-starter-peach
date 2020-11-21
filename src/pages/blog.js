import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostsList from '../components/PostsList'

const BlogPage = ({
  data: {
    site,
    blogPosts: { edges },
  },
  location,
}) => {
  return (
    <Layout location={location}>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <h2>Blog Posts &darr;</h2>
      <PostsList posts={edges} />
    </Layout>
  );
};

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
            slug
            title
            thumbnail
            tags
          }
        }
      }
    }
  }
`;
