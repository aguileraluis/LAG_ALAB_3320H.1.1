import React from 'react'; 
import './HeaderAndContact.css'; 
import EmployeePage from './EmployeePage';
import EmployeePageCard from './EmployeePageCard';

const HeaderAndContact = () => {
  return (
    <div className="navbar-and-list">
      <EmployeePage />
      <EmployeePageCard />
    </div>
  )
}

export default HeaderAndContact
