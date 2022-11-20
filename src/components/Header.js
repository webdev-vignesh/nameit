import React from 'react';
import '../stylesheets/Header.css';
import header from '../images/header.png';

const Header = ({headerExpanded, headerTitle}) => {
    return(
    <div className="head-container">
      <img 
        src={header} 
        alt='header' 
        className={`head-image ${headerExpanded
            ? 'head-image-expanded'
            : 'head-image-contracted'}`}
      />
      <h1 className={`head-text ${
          headerExpanded
            ? 'head-text-expanded'
            : 'head-text-contracted'}`}>{headerTitle}</h1>
    </div>) 
}


export default Header;
