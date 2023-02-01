import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className='header-top-strip py3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p> Free Shipping over 1100 & Free Returns</p>
            </div>
            <div className='col-6'>
              <p className='text-end '>
                Hotline:<a href='tel:+94 0719141244'>+94 0719141244</a>
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
