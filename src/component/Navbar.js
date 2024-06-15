import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='text-end mt-2'>
      <ul>
        <li><Link to="/active">Active Sale Orders</Link></li>
        <li><Link to="/completed">Completed Sale Orders</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
