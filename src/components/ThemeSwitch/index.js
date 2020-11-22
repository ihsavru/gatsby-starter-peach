import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

import './style.scss';

export default () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <label htmlFor="theme-changer">
        <input
          id="theme-changer"
          type="checkbox"
          className="theme-changer"
          onChange={(e) => toggleTheme(e.target.checked ? 'dark' : 'light')}
          checked={theme === 'dark'}
        />
        <div className="mode-container">
          {theme === 'dark' ? (
            <i className="gg-moon" />
          ) : (
            <i className="gg-sun" />
          )}
        </div>
      </label>
    )}
  </ThemeToggler>
);
