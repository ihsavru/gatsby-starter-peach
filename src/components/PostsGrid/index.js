import React from 'react';
import { Link } from 'gatsby';

import Tags from '../Tags';

import './style.scss';

const PostsGrid = ({ posts }) => (
  <>
    <div className="post__section">
      <h4>Latest Blogs</h4>
      <Link to="/blog">View All</Link>
    </div>
    <ol className="post__grid">
      {posts.map((post) => {
        const {
          frontmatter: {
            thumbnail, tags, date, title: postTitle,
          }, fields: { slug },
        } = post;
        return (
          <li key={slug} className="post__item">
            <Link to={slug} itemProp="url">
              <article
                itemScope
                itemType="http://schema.org/Article"
              >
                <img src={thumbnail} alt="" />
                <header>
                  <h4 className="post__item-title">
                    {postTitle}
                  </h4>
                  <small>{date}</small>
                </header>
                <Tags tags={tags} />
              </article>
            </Link>
          </li>
        );
      })}
    </ol>
  </>
);

export default PostsGrid;
