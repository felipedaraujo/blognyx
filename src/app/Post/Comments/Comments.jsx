import React from 'react';
import moment from 'moment';

const Comments = ({ comments, onReply }) => {
  const comment = item => {
    const date = moment(item.date).format('MMMM YYYY')

    return (
      <div key={item.id} className="comment mb-3">
        <p className="mb-1">{item.user}</p>
        <p className="mb-1 text-secondary"><small>{date}</small></p>
        <p className="mb-2 font-weight-light">{item.content}</p>
        <p className="mb-2 text-secondary font-weight-light"
           onClick={onReply}
           id={item.id}>
           Reply
        </p>
      </div>
    );
  }

  return (
    <div className="pt-5">
      <header className="mb-4">
        <h6>
          Post Comments <span className="text-secondary">({comments.length})</span>
        </h6>
      </header>

      {comments.map(comment)}
    </div>
  );
};

export default Comments;
