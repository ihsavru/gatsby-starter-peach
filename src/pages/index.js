import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import './style.scss'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <section className="about__section">
        <img src="pexels-pixabay-270694.jpg"></img>
        <div>
          <h1>{data.site.siteMetadata.title}</h1>
          <p>{data.site.siteMetadata.description}</p>
          <a href={`mailto:${data.site.siteMetadata.email}`} className="about__cta">Work with Me</a>
        </div>
      </section>
      <div className="blog__section">
        <h4>Latest Blogs</h4>
        <Link to="/blog">View All</Link>
      </div>
      <ol className="blog__grid">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const { frontmatter: { thumbnail, tags } } = post;
          return (
            <li key={post.fields.slug} className="blog__item">
              <article
                itemScope
                itemType="http://schema.org/Article"
              >
                <img src={thumbnail}></img>
                <header>
                  <h4>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h4>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section className="blog__item-tags">
                  {tags.map(tag => (
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
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

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
`
