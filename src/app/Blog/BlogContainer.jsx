import React, { Component } from 'react';
import { API_ROOT_URL } from './../../config.js'

import Blog from './Blog';

class BlogContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { posts: [] };
  }

  componentDidMount() {
    this.getPosts().then(posts => {
      const sortedPosts = this.sortByDate(posts);
      this.setState({ posts: sortedPosts });
    });
  }

  getPosts() {
    return fetch(`${API_ROOT_URL}/posts`)
      .then(response => response.json())
      .then(responseJson => responseJson)
      .catch(error => {
        console.error(error);
      });
  }

  sortByDate(array) {
    return array.sort((a,b) => {
      return new Date(b.publish_date) - new Date(a.publish_date)
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <main className="col-lg-8 pt-5">
            <Blog posts={this.state.posts} />
          </main>
        </div>
      </div>
    );
  }
};

export default BlogContainer;
