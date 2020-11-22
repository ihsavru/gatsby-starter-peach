import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import './style.scss';

const BlogIndex = ({ data, location }) => {
  const { site: { siteMetadata: { title, email, description } } } = data;
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout location={location} title={title}>
      <SEO title="All posts" />
      <section className="about__section">
        <img src="pexels-pixabay-270694.jpg" alt="" />
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
          <a href={`mailto:${email}`} className="about__cta">Work with Me</a>
        </div>
      </section>
      <div className="blog__section">
        <h4>Latest Blogs</h4>
        <Link to="/blog">View All</Link>
      </div>
      <ol className="blog__grid">
        {posts.map((post) => {
          const {
            frontmatter: {
              thumbnail, tags, date, title: postTitle,
            }, fields: { slug },
          } = post;
          return (
            <li key={slug} className="blog__item">
              <article
                itemScope
                itemType="http://schema.org/Article"
              >
                <img src={thumbnail} alt="" />
                <header>
                  <h4>
                    <Link to={slug} itemProp="url">
                      <span itemProp="headline">{postTitle}</span>
                    </Link>
                  </h4>
                  <small>{date}</small>
                </header>
                <section className="blog__item-tags">
                  {tags.map((tag) => (
                    <Link
                      to={`/tags/${tag}`}
                      className="blog__item-tag"
                    >
                      {tag}
                    </Link>
                  ))}
                </section>
              </article>
            </li>
          );
        })}
      </ol>
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
