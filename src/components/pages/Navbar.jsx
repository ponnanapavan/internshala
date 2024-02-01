import React from 'react';
import GetData from './GetData';

const Navbar = () => {
  return (
    <>
    <div className='sticky top-0 bg-black h-33 animate__animated animate__fadeIn border-solid border-4 border-pink-700 z-10'>
      <div className='text-3xl text-white transition-colors duration-500 hover:text-green-500 pl-3 text-center'>
       <h1> MOVIE INFO</h1>
      </div>
    </div>
    <GetData/>
    </>
  );
};

export default Navbar;