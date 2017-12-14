import React from 'react';

const CommentForm = ({ onChange, onSubmit }) => {
  return (
    <div className="pt-5">
      <header className="mb-4">
        <h6>
          Leave your comment
        </h6>
      </header>

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="sr-only">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Name" />
        </div>

        <div className="form-group">
          <label htmlFor="content" className="sr-only">Content</label>
          <textarea className="form-control" id="content" rows="3" placeholder="Type your comment"></textarea>
        </div>

        <button type="submit" className="btn btn-secondary">Submit Comment</button>
      </form>
    </div>
  );
};

export default CommentForm;
