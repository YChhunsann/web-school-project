import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Yeab Chhunsann</h1>
        <nav className="nav">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
