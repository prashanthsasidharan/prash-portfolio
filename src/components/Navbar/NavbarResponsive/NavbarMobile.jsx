import React, { useContext, useState } from 'react';
import { Link } from 'react-scroll';
import PortfolioContext from '../../../context/context';

const NavbarMobile = () => {
  const [isOpen, setOpenState] = useState(false);
  const { navbar } = useContext(PortfolioContext);

  function toggleNavbar() {
    setOpenState((prev) => !prev);
  }

  return (
    <nav className="navbar-mobile">
      <button type="button" className="navbar-toggle-wrapper" onClick={toggleNavbar}>
        <div className={`navbar-toggler ${isOpen && 'is-active'}`}>
          <div className="hamburger-box">
            <div className="hamburger-inner" />
          </div>
        </div>
      </button>
      <ul className={`${isOpen ? 'navbar-open' : 'navbar-close'}`}>
        {navbar.links?.map((link) => (
          <li className="link-mobile">
            <Link to={`${link.url}`} smooth duration={1000} hashSpy spy>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarMobile;
