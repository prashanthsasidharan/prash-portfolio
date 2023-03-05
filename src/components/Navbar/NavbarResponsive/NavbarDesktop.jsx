import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import PortfolioContext from '../../../context/context';

const NavbarDesktop = () => {
  const { navbar } = useContext(PortfolioContext);
  return (
    <div className="navbar">
      <div className="navbar-content">
        <a href="/">
          <a aria-current="page" className="logo" href="/">
            {/* <img src="" alt="Anurag Hazra" /> */}
          </a>
        </a>
        <nav>
          <ul className="links">
            {navbar.links?.map((link) => (
              <li className="link">
                <Link to={`${link.url}`} smooth duration={1000} hashSpy spy>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavbarDesktop;
