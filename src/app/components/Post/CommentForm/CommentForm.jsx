import React from 'react';
import PropTypes from 'prop-types';

const CommentForm = ({ onSubmit, nameRef }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name" className="sr-only">Name</label>
        <input type="text"
               className="form-control"
               id="name"
               placeholder="Name"
               ref={nameRef} />
      </div>

      <div className="form-group">
        <label htmlFor="content" className="sr-only">Content</label>
        <textarea className="form-control"
                  id="content"
                  rows="3"
                  placeholder="Type your comment">
        </textarea>
      </div>

      <button type="submit" className="btn btn-secondary">Submit Comment</button>
    </form>
  );
};

CommentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default CommentForm;
