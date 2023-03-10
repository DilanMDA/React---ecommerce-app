import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div
        className={`${
          location.pathname === "/store" ? `gr-${grid}` : "col-3"
        }`}>
        <Link className='product-card position-relative'>
          <div className='wishlist-icon position-absolute'>
            <Link>
              <img src='images/wish.svg' alt='wishlist' />
            </Link>
          </div>
          <div className='product-image'>
            <img
              className='img-fluid'
              src='images/watch.jpg'
              alt='product imag'
            />
            <img
              className='img-fluid'
              src='images/watch-1.avif'
              alt='product imag'
            />
          </div>
          <div className='product-details'>
            <h6 className='brand'>Havels</h6>
            <h5 className='product-title'>
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              // onChange={ratingChanged}
              value={4}
              edit={false}
              size={24}
              activeColor='#ffd700'
            />{" "}
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              A product description is a brief summary of the features,
              benefits, and characteristics of a particular product. It
              typically includes information about the product's design,
              functionality, materials, size, and any other relevant details
              that potential customers may need to know before making a purchase
              decision.
            </p>
            <p className='price'>$100.00</p>
          </div>
          <div className='action-bar position-absolute '>
            <div className='d-flex flex-column gap-15'>
              <Link>
                <img src='images/prodcompare.svg' alt='compare' />
              </Link>
              <Link>
                <img src='images/view.svg' alt='View' />
              </Link>
              <Link>
                <img src='images/add-cart.svg' alt='add cart' />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${
          location.pathname === "/store" ? `gr-${grid}` : "col-3"
        }`}>
        <Link className='product-card position-relative'>
          <div className='wishlist-icon position-absolute'>
            <Link>
              <img src='images/wish.svg' alt='wishlist' />
            </Link>
          </div>
          <div className='product-image'>
            <img
              className='img-fluid'
              src='images/watch.jpg'
              alt='product imag'
            />
            <img
              className='img-fluid'
              src='images/watch-1.avif'
              alt='product imag'
            />
          </div>
          <div className='product-details'>
            <h6 className='brand'>Havels</h6>
            <h5 className='product-title'>
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              // onChange={ratingChanged}
              value={4}
              edit={false}
              size={24}
              activeColor='#ffd700'
            />{" "}
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              A product description is a brief summary of the features,
              benefits, and characteristics of a particular product. It
              typically includes information about the product's design,
              functionality, materials, size, and any other relevant details
              that potential customers may need to know before making a purchase
              decision.
            </p>
            <p className='price'>$100.00</p>
          </div>
          <div className='action-bar position-absolute '>
            <div className='d-flex flex-column gap-15'>
              <Link>
                <img src='images/prodcompare.svg' alt='compare' />
              </Link>
              <Link>
                <img src='images/view.svg' alt='View' />
              </Link>
              <Link>
                <img src='images/add-cart.svg' alt='add cart' />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${
          location.pathname === "/store" ? `gr-${grid}` : "col-3"
        }`}>
        <Link className='product-card position-relative'>
          <div className='wishlist-icon position-absolute'>
            <Link>
              <img src='images/wish.svg' alt='wishlist' />
            </Link>
          </div>
          <div className='product-image'>
            <img
              className='img-fluid'
              src='images/watch.jpg'
              alt='product imag'
            />
            <img
              className='img-fluid'
              src='images/watch-1.avif'
              alt='product imag'
            />
          </div>
          <div className='product-details'>
            <h6 className='brand'>Havels</h6>
            <h5 className='product-title'>
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              // onChange={ratingChanged}
              value={4}
              edit={false}
              size={24}
              activeColor='#ffd700'
            />{" "}
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              A product description is a brief summary of the features,
              benefits, and characteristics of a particular product. It
              typically includes information about the product's design,
              functionality, materials, size, and any other relevant details
              that potential customers may need to know before making a purchase
              decision.
            </p>
            <p className='price'>$100.00</p>
          </div>
          <div className='action-bar position-absolute '>
            <div className='d-flex flex-column gap-15'>
              <Link>
                <img src='images/prodcompare.svg' alt='compare' />
              </Link>
              <Link>
                <img src='images/view.svg' alt='View' />
              </Link>
              <Link>
                <img src='images/add-cart.svg' alt='add cart' />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
