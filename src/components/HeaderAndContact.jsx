import React from 'react'; 
import './HeaderAndContact.css'; 
import EmployeePage from './EmployeePage';
import ListDirectory from './ListDirectory';

const HeaderAndContact = () => {
  return (
    <div className="navbar-and-list">
      <EmployeePage />
      <ListDirectory />
    </div>
  )
}

export default HeaderAndContact
