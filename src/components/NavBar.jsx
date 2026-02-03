import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <div className='flex items-center justify-between gap-5 px-5 py-5 bg-red-500'>
      <Link href={'/'} className='text-3xl font-semibold'><img src="./foodzz.png" width='150' alt="" /></Link>
      <div className='space-x-3'>
        <Link href={'/foods'} className='btn'>Food</Link>
        <Link href={'/reviews'} className='btn'>Reviews</Link>
        
      </div>
    </div>
  );
};

export default NavBar;