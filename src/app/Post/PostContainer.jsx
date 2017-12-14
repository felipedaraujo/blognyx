import React, { Component } from 'react';
import moment from 'moment';
import { API_ROOT_URL } from './../../config.js';

import Post from './Post';
import Comments from './Comments';
import CommentForm from './CommentForm';

class PostContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
      comments: [],
      parentCommentId: null
    };
  }

  componentDidMount() {
    const { slug } = this.props.params;

    this.getPostBySlug(slug)
      .then(post => this.setState({ post }, this.getPostCallback));
  }

  getPostBySlug(slug) {
    return fetch(`${API_ROOT_URL}/posts?slug=${slug}`)
      .then(response => response.json())
      .then(responseJson => responseJson[0])
      .catch(error => {
        console.error(error);
      });
  }

  getPostCallback() {
    const { id } = this.state.post;

    this.getCommentsByPostId(id)
      .then(comments => this.setState({ comments }));
  }

  getCommentsByPostId(postId) {
    return fetch(`${API_ROOT_URL}/posts/${postId}/comments`)
      .then(response => response.json())
      .then(responseJson => responseJson)
      .catch(error => {
        console.error(error);
      });
  }

  onReplyComment(event) {
    debugger
    this.setState({ parentCommentId: event.target.id });
  }

  onSubmitComment(event) {
    event.preventDefault();
    event.stopPropagation();

    const { post, parentCommentId } = this.state;
    const { name, content } = event.target;
    const date = moment().format('YYYY-MM-DD');
    const params = {
      parent_id: parentCommentId,
      user: name.value,
      content: content.value,
      date: date
    }

    this.postComment(post.id, JSON.stringify(params))
      .then(comment => this.setState({ comments: [...this.state.comments, comment]}));
  }

  postComment(postId, params) {
    return fetch(`${API_ROOT_URL}/posts/${postId}/comments`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: params
    }).then(response => response.json())
      .then(responseJson => responseJson)
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <main className="col-lg-8 pt-5">
            <Post post={this.state.post} />
            <Comments comments={this.state.comments} onReply={this.onReplyComment} />
            <CommentForm onSubmit={this.onSubmitComment.bind(this)} />
          </main>
        </div>
      </div>
    );
  }
};

export default PostContainer;
