import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import FaClockO from 'react-icons/lib/fa/clock-o';

const BlogPost = ({ post }) => {
  const publishedDate = moment(post.publish_date).format("D MMMM | YYYY");
  const timeFromNow = moment(post.publish_date).fromNow();

  return (
    <div className="col-xl-6 mb-5 post">
      <div className="post-thumbnail">
        <Link to={`/blog/${post.slug}`}>
          <img src={post.image_url} className="img-fluid" alt={post.title}/>
        </Link>
      </div>

      <p className="text-secondary my-2">{publishedDate}</p>

      <Link to={`/blog/${post.slug}`} className="link-unstyled">
        <h4 className="post-title">{post.title}</h4>
      </Link>

      <p className="post-description text-secondary">{post.description}</p>

      <footer className="d-flex justify-content-between text-secondary">
        <span>{post.author}</span>
        <div>
          <FaClockO className="mr-1" />
          <span>{timeFromNow}</span>
        </div>
      </footer>
    </div>
  )
};

BlogPost.propTypes = {
  post: PropTypes.shape({
    id:           PropTypes.number.isRequired,
    title:        PropTypes.string.isRequired,
    description:  PropTypes.string.isRequired,
    author:       PropTypes.string.isRequired,
    slug:         PropTypes.string.isRequired,
    image_url:    PropTypes.string.isRequired,
    publish_date: PropTypes.string.isRequired
  })
};

export default BlogPost;
