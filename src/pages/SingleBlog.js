import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title='Dynamic Blog Name' />
      <div className='blog-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='single-blog-card'>
                <Link className='d-flex align-items-center gap-10' to='/blogs'>
                  <HiOutlineArrowLeft className='fs-4' /> Go back to Blogs
                </Link>
                <h3>A Beautiful Sunday Morning Renaissance</h3>
                <img
                  src='images/blog-1.jpg'
                  className='img-fluid w-100 my-4'
                  alt='blog'
                />
                <p>
                  A blog card is a type of social media preview that shows a
                  snippet of a blog post along with an image and a link to the
                  full article. These cards are used to promote blog content on
                  social media platforms like Twitter, Facebook, LinkedIn, and
                  others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
