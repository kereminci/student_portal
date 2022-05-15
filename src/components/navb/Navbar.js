import React, { useState, useEffect } from "react";
import "./Navbar.css";
import "../../Images/logo.png"
//import { click } from "@testing-library/user-event/dist/click";

import { Link } from "react-router-dom";

function Navbar() {

  const [show, setShow] = useState(true)
  const controlNav = () => {
    if (window.scrollY > 120) {
      setShow(false)
      /*setLogo("rmvlogo")*/
    } else {
      setShow(true)
      /*setLogo("logoimg")*/
    }
  }
  window.addEventListener("scroll", controlNav)

  /*const [logo, setLogo] = useState("logoimg")*/


  const [dropdown2, setDropdown2] = useState("dropdown-menu")
  const dropdownToggle2 = () => {
    if (dropdown2 === "dropdown-menu") {
      setDropdown2("dropdown-active");
      setDropdown("dropdown-menu");
    } else setDropdown2("dropdown-menu");
  }


  const [dropdown, setDropdown] = useState("dropdown-menu")
  const dropdownToggle = () => {
    if (dropdown === "dropdown-menu") {
      setDropdown("dropdown-active");
      setDropdown2("dropdown-menu");
    } else setDropdown("dropdown-menu");
  }

  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
    /*show ? 'nav' : 'scroll-nav'*/
  };
  return (
    <div>
      <nav className="nav">
        <div className="titlelogowrapper">
          <Link to="/">
            <img className="logoimg" width="70" height="%70" src="https://upload.wikimedia.org/wikipedia/tr/thumb/6/6a/Istanbul_%C3%BCniversitesi-cerrahpa%C5%9Fa_logosu.png/241px-Istanbul_%C3%BCniversitesi-cerrahpa%C5%9Fa_logosu.png" alt="iucLogo" />
          </Link>
          <Link to="/"><h3 className="title">İSTANBUL UNIVERSITESI - CERRAHPAŞA</h3></Link>
        </div>
        <div className="listloginwrapper">
          <ul className={active}>
            <li className="nav__item">
              <div className="dropdownwrapper">
                <Link to="/hakkimizda">
                  <div className="text">
                    Hakkımızda
                  </div>
                </Link>
              </div>
            </li>
            <li className="nav__item">
              <div className="dropdownwrapper">
                <Link to="/akademik">
                  <div className="text">
                    Akademik
                  </div>
                </Link>
              </div>
            </li>
            <li className="nav__item" onClick={dropdownToggle2}>
              <div className="dropdownwrapper">
                Ogrenci
                <box-icon name='down-arrow' flip='horizontal' color='#faf8f7' ></box-icon>
              </div>
              <ul className={dropdown2}>
                <li onClick={dropdownToggle2}><a href="#" ><div className="dropdown-item">Ogrenci1</div></a></li>
                <li onClick={dropdownToggle2}><a href="#" ><div className="dropdown-item">Ogrenci2</div></a></li>
                <li onClick={dropdownToggle2}><a href="#" ><div className="dropdown-item">Ogrenci3</div></a></li>
              </ul>
            </li>
            <li className="nav__item" onClick={dropdownToggle}>
              <div className="dropdownwrapper">
                Bölümlerimiz
                <box-icon name='down-arrow' flip='horizontal' color='#faf8f7' size='sm' ></box-icon>
              </div>
              <ul className={dropdown}>
              <Link to="/bolum"><li onClick={dropdownToggle}>Bilgisayar Mühendisliği</li></Link>
              <Link to="/bolum"><li onClick={dropdownToggle}>Endüstri Mühendisliği</li></Link>
              <Link to="/bolum"> <li onClick={dropdownToggle}>Elektrik Elektronik Mühendisliği</li></Link>
              </ul>
            </li>
            <li className="nav__item">
              <div className="dropdownwrapper">
                <Link to="/arastirma">
                  <div className="text">
                    Araştırma
                  </div>
                </Link>
              </div>
            </li>
            <li className="nav__item">
              <div className="dropdownwrapper">
                <Link to="/yerleskeler">
                  <div className="text">
                    Yerleşkeler
                  </div>
                </Link>
              </div>
            </li>
          </ul>
          <div className="login">
            <Link to="/login">
              <box-icon name='user' color='#fbf9f9' ></box-icon>
            </Link>
          </div>
        </div>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;