import React from 'react'; 
import './Navbar.css'; 

const Navbar = () => {
  return (
    <div className="employeeDetails">
   <ul>
    <li>
      <a href="" className="link-two">
        <i className="fa-solid fa-address-book"></i>
        <div>
          <h2>Call Office</h2>
          <p>781-000-0002</p>
        </div>
        <div className="caret">
        <i className="fa text-right fa-chevron-right" aria-hidden="true"></i>
        </div>
      </a>
    </li>
    <hr/>
    <li>
      <a href="" className="link-two">
        <i className="fa-solid fa-heart"></i>
        <div>
          <h2>Call Mobile</h2>
          <p>617-000-0002</p>
        </div>
        <div className="caret">
        <i className="fa text-right fa-chevron-right" aria-hidden="true"></i>
        </div>
      </a>
    </li>
    <hr/>
    <li>
      <a href="" className="link-two">
        <i className="fa-solid fa-address-book"></i>
        <div>
          <h2>SMS</h2>
          <p>617-000-0002</p>
        </div>
        <div className="caret-two">
        <i className="fa text-right fa-chevron-right" aria-hidden="true"></i>
        </div>
      </a>
    </li>
    <hr/>
    <li>
      <a href="" className="link-two">
        <i className="fa-solid fa-heart"></i>
        <div>
          <h2>Email</h2>
          <p>luis@fakeemail.com</p>
        </div>
        <div className="caret-three">
        <i className="fa text-right fa-chevron-right" aria-hidden="true"></i>
        </div>
      </a>
    </li>
    <hr/>
   </ul>
    </div>

  )
}

export default Navbar;
