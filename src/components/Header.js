import React from 'react';
import '../stylesheets/Header.css';
import header from '../images/header.png';

class Header extends React.Component {
  
  render() {
    return(
    <div className="head-container">
      <img 
        src={header} 
        alt='header' 
        className={`head-image ${
          this.props.headerExpanded
            ? 'head-image-expanded'
            : 'head-image-contracted'}`}
      />
      <h1 className={`head-text ${
          this.props.headerExpanded
            ? 'head-text-expanded'
            : 'head-text-contracted'}`}>{this.props.headerTitle}</h1>
    </div>) 
  }
}


export default Header;
