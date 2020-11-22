import React from 'react';
import { Link } from 'gatsby';

import './style.scss';

const Tags = ({ tags }) => (
  <section className="tags__container">
    {tags.map((tag) => (
      <Link
        to={`/tags/${tag}`}
        className="tags__link"
      >
        {tag}
      </Link>
    ))}
  </section>
);

export default Tags;
