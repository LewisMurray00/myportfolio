import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper'
import './Footer.scss'

const Footer = () => {
  return (
    <>
      <h2 className='head-text'>Get in contact</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a href="mailto:lewisdmurray00@gmail.com" className='p-text'>lewisdmurray00@gmail.com</a>
        </div>
      
        <div className='app__footer-card'>
          <img src={images.mobile} alt="mobile" />
          <a href='tel: +447577380000'>07577380000</a>
        </div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)