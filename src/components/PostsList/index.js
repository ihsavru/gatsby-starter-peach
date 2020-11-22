import React from 'react';
import { Link } from 'gatsby';

import './style.scss';

const PostsList = ({ posts }) => (
  <ul className="posts__container">
    {posts.map(({ node: { frontmatter: { thumbnail, tags, title } } }) => (
      <li>
        <article className="posts__article">
          <img className="posts__thumbnail" src={thumbnail} alt="" />
          <div>
            <h2>{title}</h2>
            <div className="blog__item-tags">
              {tags.map((tag) => (
                <Link
                  to={`/tags/${tag}`}
                  className="blog__item-tag"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </article>
      </li>
    ))}
  </ul>
);

export default PostsList;
