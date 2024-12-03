import React from 'react'; 
import './AppComponent.css'; 
import HeaderComponent from './HeaderComponent';
import HeaderAndContact from './HeaderAndContact'; 

const AppComponent = () => {
  return (
    <div className="contact-list-app">
      <HeaderComponent />
      <HeaderAndContact />
    </div>
  )
}

export default AppComponent; 