/**
 * @overview Application entry point.
 */

// Global application styles
import 'src/app.scss';

// React
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Our app
import App from './app/App';
import Home from './app/Home';
import About from './app/About';
import BlogContainer from './app/Blog';
import PostContainer from './app/Post';
import NoMatch from './app/NoMatch';

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path=''component={Home} />
      <Route path='about' component={About}/>
      <Route path='blog' component={BlogContainer} />
      <Route path='blog/:slug' component={PostContainer} />
      <Route path='*' component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('root'));
