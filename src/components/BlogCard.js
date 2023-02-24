import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className='blog-card'>
      <div className='card-image'>
        <img src='images/blog-1.jpg' className='img-fluid w-100' alt='blog' />
      </div>
      <div className='blog-content'>
        <p className='date'>15 Feb, 2023</p>
        <h5 className='title'>A beautiful Sunday morning renaissance</h5>
        <p className='desc'>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs
        </p>
        <Link to='/blog/:id' className='button'>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
