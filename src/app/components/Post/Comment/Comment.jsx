import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const Comment = ({ comment, onReply }) => {
  const date = moment(comment.date).format('MMMM YYYY')

  return (
    <div key={comment.id} className="comment mb-3">
      <p className="mb-1">{comment.user}</p>
      <p className="mb-1 text-secondary"><small>{date}</small></p>
      <p className="mb-2 font-weight-light comment-content">{comment.content}</p>
      <p className="mb-2 text-secondary font-weight-light"
         onClick={onReply}
         id={comment.id}>
         Reply
      </p>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    id:      PropTypes.number.isRequired,
    user:    PropTypes.string.isRequired,
    date:    PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }),
  onReply: PropTypes.func.isRequired
};

export default Comment;
