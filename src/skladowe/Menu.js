import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
const closeMobileMenu = () => setIsClicked(false);
  return (
    <>
      <nav className={`menu ${isClicked ? 'active' : ''}`}>
        <div className="menu-kontener">
          <Link to="/" className="logo-menu">
            TRVL <i className="fab fa-typo3"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={isClicked ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className = {isClicked ? 'nav-menu active' : 'nav-menu'}>
            <li className = 'menu-item'>
              <Link to = '/' className='menu-linki' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className = 'menu-item'>
              <Link to = '/' className='menu-linki' onClick={closeMobileMenu}>
                Servies
              </Link>
            </li>

            <li className = 'menu-item'>
              <Link to = '/' className='menu-linki' onClick={closeMobileMenu}>
                Logownie
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Menu;
