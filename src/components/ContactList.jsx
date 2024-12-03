import React from 'react'; 
import './ContactList.css'; 
import HeaderAndContact from './HeaderAndContact';
import HeaderComponent from './HeaderComponent';

const ContactList = () => {
  return (
    <div className="contact-list-app">
      <HeaderComponent />
      <HeaderAndContact />
    </div>
  )
}

export default ContactList
