import React, { Component } from 'react';
import moment from 'moment';

import RestAPI from './../../helpers/RestAPI';

import Post from './Post';
import Comment from './Comment';
import CommentForm from './CommentForm';

class PostContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
      comments: [],
      parentCommentId: null,
      formNameRef: null
    };
  }

  componentDidMount() {
    const { slug } = this.props.params;

    RestAPI.fetchByAttr('/posts', slug, 'slug')
      .then(posts => this.setState({ post: posts[0] }, this.getPostCallback));
  }

  getPostCallback() {
    const { id } = this.state.post;

    RestAPI.fetchAll(`/posts/${id}/comments`)
      .then(comments => this.setState({ comments }));
  }

  onReplyComment(event) {
    const parentCommentId = parseInt(event.target.id);

    this.setState({ parentCommentId });

    this.nameInputRef.focus()
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

    RestAPI.add(`/posts/${post.id}/comments`, params)
      .then(comment => {
        this.setState({ comments: [...this.state.comments, comment] });
      });

    event.target.reset();
  }

  render() {
    const { comments } = this.state;

    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <main className="col-lg-8 pt-5">
            <Post post={this.state.post} />

            <div className="pt-5">
              <div className="mb-4">
                <h6>
                  Post Comments
                  <span className="text-secondary">({comments.length})</span>
                </h6>
              </div>
              {
                comments.map(comment =>
                  <Comment key={comment.id}
                           comment={comment}
                           onReply={this.onReplyComment.bind(this)} />)
              }
            </div>

            <div className="pt-5">
              <div className="mb-4">
                <h6>
                  Leave your comment
                </h6>
              </div>

              <CommentForm onSubmit={this.onSubmitComment.bind(this)}
                           nameRef={el => this.nameInputRef = el} />
            </div>
          </main>
        </div>
      </div>
    );
  }
};

export default PostContainer;
