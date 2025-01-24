import React from 'react';

const Header = ({ setActiveSection }) => {
  return (
    <header>
      <h1>Harsha's Portfolio</h1>
      <nav>
        <ul>
          <li><button onClick={() => setActiveSection('about')}>About</button></li>
          <li><button onClick={() => setActiveSection('projects')}>Projects</button></li>
          <li><button onClick={() => setActiveSection('contact')}>Contact</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
