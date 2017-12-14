import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';
import FaClockO from 'react-icons/lib/fa/clock-o';

const Blog = ({ posts }) => {
  const post = item => {
    const publishedDate = moment(item.publish_date).format("D MMMM | YYYY");
    const timeFromNow = moment(item.publish_date).fromNow();

    return (
      <div key={item.slug} className="col-xl-6 mb-5">
        <Link to={`/blog/${item.slug}`}>
          <img src={item.image_url} className="img-fluid" alt={item.title}/>
        </Link>

        <p className="text-secondary my-2">{publishedDate}</p>

        <Link to={`/blog/${item.slug}`} className="link-unstyled">
          <h4>{item.title}</h4>
        </Link>

        <p className="text-secondary">{item.description}</p>

        <footer className="d-flex justify-content-between text-secondary">
          <span>{item.author}</span>
          <div>
            <FaClockO className="mr-1" />
            <span>{timeFromNow}</span>
          </div>
        </footer>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="row">
        { posts.map(post) }
      </div>
    </div>
  )
};

export default Blog;
