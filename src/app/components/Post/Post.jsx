import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import FaClockO from 'react-icons/lib/fa/clock-o';

const Post = ({ post }) => {
  const timeFromNow = moment(post.publish_date).fromNow();

  return (
    <article>
      <div className="post-thumbnail">
        <img src={post.image_url} alt={post.title} className="img-fluid"/>
      </div>

      <h1 className="my-3">{post.title}</h1>

      <div className="d-flex justify-content-between text-secondary">
        <span>{post.author}</span>
        <div>
          <FaClockO className="mr-1" />
          <span>{timeFromNow}</span>
        </div>
      </div>

      <div className="lead mt-4" dangerouslySetInnerHTML={{__html: post.content}} />
    </article>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id:           PropTypes.number.isRequired,
    title:        PropTypes.string.isRequired,
    content:      PropTypes.string.isRequired,
    author:       PropTypes.string.isRequired,
    image_url:    PropTypes.string.isRequired,
    publish_date: PropTypes.string.isRequired
  })
};

export default Post;
