import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "./../components/Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact"} />
      <BreadCrumb title='Contact' />
      <div className='contact-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <iframe
                title='This is a map'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.792091040272!2d79.89867831527978!3d6.795132921829863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae245416b7f34b5%3A0x7bd32721ab02560e!2sUniversity%20of%20Moratuwa!5e0!3m2!1sen!2slk!4v1677009813840!5m2!1sen!2slk'
                width='600'
                height='450'
                className='border-0 w-100'
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'></iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contact-title mb-4'>Contact</h3>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Name'
                      />
                    </div>
                    <div>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Email'
                      />
                    </div>
                    <div>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Mobile Number'
                      />
                    </div>
                    <div>
                      <textarea
                        id=' '
                        className='w-100 form-control'
                        cols='30'
                        rows='4'
                        placeholder='Comments'></textarea>
                    </div>
                    <div>
                      <button className='button border-0'>Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className='contact-title mb-4'>Get in touch with user</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineHome className='fs-5' />
                        <address className='mb-0'>
                          akila dilan, Sooriyawewa, Hambanthota
                        </address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiPhoneCall className='fs-5' />
                        <a href='tel:+94 0719141244'>+94 0719141244</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineMail className='fs-5' />
                        <a href='mailto: akiladilan04@gmail.com'>
                          {" "}
                          akiladilan04@gmail.com
                        </a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiInfoCircle className='fs-5' />
                        <p className='mb-0'> Monday - Friday 10Am - 8PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
