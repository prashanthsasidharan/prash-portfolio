import React from 'react';
import NavbarDesktop from './NavbarResponsive/NavbarDesktop';
import NavbarMobile from './NavbarResponsive/NavbarMobile';

const Navbar = () => {
  return (
    <>
      <NavbarDesktop />
      <NavbarMobile />
    </>
  );
};

export default Navbar;
