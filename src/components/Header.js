import React, {Component} from 'react';
import './Header.module.scss';

class Header extends Component {  
  render() {
    return (
      <header>
        <a href="#workspace">JSON viewer</a>
        <nav>
          <a href="#about">About</a>
          <a href="#support">Support</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    )
  }
}

export default Header;