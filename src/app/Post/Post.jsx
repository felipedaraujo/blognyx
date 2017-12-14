import React from 'react';
import moment from 'moment';
import FaClockO from 'react-icons/lib/fa/clock-o';

const Post = ({ post }) => {
  const timeFromNow = moment(post.publish_date).fromNow();

  return (
    <article>
      <img src={post.image_url} alt={post.title} className="img-fluid"/>

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

export default Post;
