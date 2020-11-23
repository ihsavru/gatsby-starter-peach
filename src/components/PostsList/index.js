import React from 'react';

import Tags from '../Tags';

import './style.scss';

const PostsList = ({ posts }) => (
  <ul className="posts__container">
    {posts.map(({
      node: {
        frontmatter: { thumbnail, tags, title },
        fields: { slug },
        excerpt,
      },
    }) => (
      <li>
        <a href={slug}>
          <article className="posts__article">
            <div
              className="posts__thumbnail"
              style={{ backgroundImage: `url(${thumbnail}` }}
            />
            <div>
              <h2 className="posts__title">{title}</h2>
              <p>{excerpt}</p>
              <Tags tags={tags} />
            </div>
          </article>
        </a>
      </li>
    ))}
  </ul>
);

export default PostsList;
