import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PostsList from '../components/PostsList';
import SEO from '../components/seo';
import Tags from '../components/Tags';

export default function TagTemplate({
  pageContext,
  data,
  location,
}) {
  const { site, blogPosts, tagsGroup } = data;
  const { tag } = pageContext;

  const { edges, totalCount } = blogPosts;
  const { group: tags } = tagsGroup;
  const { siteMetadata } = site;

  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;

  return (
    <Layout location={location}>
      <SEO
        title={`${tag} | Posts`}
        description={tagHeader}
      />
      <Helmet>
        <title>
          {siteMetadata.title}
        </title>
        <meta name="description" />
      </Helmet>
      <div className="blog-post-container">
        <div>
          <h2>
            {tagHeader}
            {' '}
            &darr;
          </h2>
          <PostsList posts={edges} />
          <h2 className="all-tags">All Tags &darr;</h2>
          <div className="post__tags tags-container">
            <Tags tags={tags.map(({ tag: tagName }) => tagName)} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($tag: String!) {
    site {
      siteMetadata {
        title
      }
    }
    tagsGroup: allMarkdownRemark {
      group(field: frontmatter___tags) {
        tag: fieldValue
      }
    }
    blogPosts: allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
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
