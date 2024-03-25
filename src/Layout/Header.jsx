import React, { useState, useEffect } from "react";
import Logo from "../assets/Icons/Layer_1.svg";
import BurgerMenuClose from "../assets/Icons/closeMain.svg";
import BurgerMenuOpen from "../assets/Icons/openMain.svg";
import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const closeNavbar = () => {
      setMenu(false);
      document.body.style.overflowY = "";
    };

    if (menu) {
      document.addEventListener("click", closeNavbar);
      document.body.style.overflowY = "hidden"; 
    } else {
      document.removeEventListener("click", closeNavbar);
      document.body.style.overflowY = ""; 
    }

    return () => {
      document.removeEventListener("click", closeNavbar);
      document.body.style.overflowY = "";
    };
  }, [menu]);

  const toggleMenu = (e) => {
    e.stopPropagation(); 
    setMenu(!menu);
  };

  const handleLinkClick = () => {
    setMenu(false); // Close the menu when a link is clicked
  };

  return (
    <div className=" bg-whiteColor">
      <div className="container mx-auto flex mt-1 px-6">
        <div className="Nav flex fixed left-0 z-50  right-0 justify-between  items-center max-w-[1200px]  h-[60px] mx-5  lg:mx-auto px-10 shadow ">
          <div className="logo ">
            <Link to='/'>
              <img src={Logo} alt="asas" />
            </Link>
          </div>
          <div
            className="menuBar  cursor-pointer "
            onClick={toggleMenu}
          >
            {menu ? (
              <img src={BurgerMenuOpen} alt="Burgermenu" />
            ) : (
              <img src={BurgerMenuClose} alt="Burgermenu" />
            )}
          </div> 
        </div>
        <div
          className="repsonsiveMenu  fixed left-0 right-0 mx-5  lg:mx-auto max-w-[1200px]  flex items-center
           justify-center   py-5  "
          style={{
            top: menu ? "5px" : "-500px",
            transition: "top 0.5s ease",
          }}
          onClick={(e) => e.stopPropagation()} 
        >
          <ul className="  flex flex-col items-center gap-6  lg:gap-[28px]  font-pop font-normal transition-all duration-500 ease-in mt-12">
            <li onClick={handleLinkClick}>
              <a className="cursor-pointer" target="_blank" href='https://wa.me/994553091509' onClick={handleLinkClick}>Sifariş et</a>
            </li>
            <li onClick={handleLinkClick}>
              <Link className="cursor-pointer" to="1"
                spy={true}
                smooth={true}
                offset={-70} // Adjust this value according to your layout
                duration={500}
                onClick={handleLinkClick}>Əlaqə</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
