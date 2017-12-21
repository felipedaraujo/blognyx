/**
 * @overview Home page.  Renders static content.
 */
import React from 'react';

// Render static HTML:
import __html from './nomatch.html';

const NoMatch = () => <div dangerouslySetInnerHTML={{ __html }} />;

export default NoMatch;
