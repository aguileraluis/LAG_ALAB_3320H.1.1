import React from 'react';
import './EmployeePageCard.css'; 
import Navbar from './Navbar';
import NavHeaderCard from './NavHeaderCard';
import ListDirectoryCard from './ListDirectoryCard';

const EmployeePageCard = () => {
  return (
    <div className="vertical-nav">
      <NavHeaderCard />
      <ListDirectoryCard />
      <Navbar />
    </div>
  )
}

export default EmployeePageCard; 
