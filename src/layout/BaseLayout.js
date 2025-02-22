import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li><Link className='DongChiNavbar' to="/DongChi">دنگ‌چی</Link></li>
          <li><Link to="/page1">FunctionalBase</Link></li>
          <li><Link to="/page3">TestApi</Link></li>
          <li><Link to="/page4">TestAjax</Link></li>
          <li><Link to="/pageA">Page A</Link></li>
          <li><Link to="/pageB">Page B</Link></li>
          <li><Link to="/pageC">Page C</Link></li>
          <li><Link to="/page5">UseRef</Link></li>
          <li><Link to="/page6">UseCallback</Link></li>
          <li><Link to="/page7">CustomHook</Link></li>
          <li><Link to="/user-details">user-details</Link></li>
        </ul>
      </nav>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Layout;