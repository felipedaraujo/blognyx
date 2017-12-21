import React, { Component } from 'react';

import RestAPI from './../../helpers/RestAPI';
import BlogPost from './BlogPost';

class BlogContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { posts: [] };
  }

  componentDidMount() {
    RestAPI.fetchAll('/posts').then(posts => {
      const sortedPosts = this.sortByDate(posts);
      this.setState({ posts: sortedPosts });
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
            <div className="container">
              <div className="row">
                {
                  this.state.posts.map(post =>
                    <BlogPost post={post} key={post.id} />)
                }
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
};

export default BlogContainer;
