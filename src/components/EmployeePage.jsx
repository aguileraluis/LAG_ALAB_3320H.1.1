import React from 'react';
import './EmployeePage.css'; 
import HeaderComponent from './HeaderComponent';
import NavHeader from './NavHeader';
import ListDirectory from './ListDirectory';

const EmployeePage = () => {
  return (
    <div className="vertical-nav">
      <NavHeader />
      <HeaderComponent />
      <ListDirectory />
    </div>
  )
}

export default EmployeePage; 
