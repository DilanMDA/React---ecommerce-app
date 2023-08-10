import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

export const SingleProduct = () => {
    return (
      <>
        <Meta title={'Product Name'} />
            <BreadCrumb title='Product Name' />
            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row"></div>
                </div>
            </div>
      </>
    );
};
