import React from 'react';
import logo from '../img/logo-white.png';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo-box'>
        <img src={logo} alt='logo' className='header__logo' />
      </div>
      <div className='header__text-box'>
        <h1 className='heading-primary'>
          <span className='heading-primary--main'>אדל & אורה</span>
          <span className='heading-primary--sub'>אוהב אותכם</span>
        </h1>
        <a href='#' className='btn btn--white btn--animated'>
          גם אלי ואילה
        </a>
      </div>
    </header>
  );
};
