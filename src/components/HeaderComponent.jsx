import React from 'react'; 
import './HeaderComponent.css'; 
import Button from './Button';

const HeaderComponent = () => {
  return (
    <div className="horizontal-nav">
      <div className="profile">
        <div className="profile-img-box">
          <i className="fa-solid fa-user"></i>
        </div>
        <h2>Luis Aguilera</h2>
      </div>
      <form className="search-box">
        <input type="text" placeholder="Search Employees"></input>
        <Button name="Search"/>
      </form>
    </div>
  )
}

export default HeaderComponent
