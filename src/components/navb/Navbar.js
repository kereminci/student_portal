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
                <Link to="/hakkimizda">Hakkımızda</Link>
              </div>
            </li>
            <li className="nav__item">
              <div className="dropdownwrapper">
                <Link to="/akademik">Akademik</Link>
              </div>
            </li>
            <li className="nav__item" onClick={dropdownToggle2}>
              <div className="dropdownwrapper">
                Ogrenci
                <box-icon name='down-arrow' flip='horizontal' color='#faf8f7' ></box-icon>
              </div>
              <ul className={dropdown2}>
                <li onClick={dropdownToggle2}><a href="#" >B1</a></li>
                <li onClick={dropdownToggle2}><a href="#" >B2</a></li>
                <li onClick={dropdownToggle2}><a href="#" >B2</a></li>
              </ul>
            </li>
            <li className="nav__item" onClick={dropdownToggle}>
              <div className="dropdownwrapper">
                Bilgi İşlem
                <box-icon name='down-arrow' flip='horizontal' color='#faf8f7' size='sm' ></box-icon>
              </div>
              <ul className={dropdown}>
                <li onClick={dropdownToggle}><Link to="/bolum">Bilgisayar Mühendisliği</Link></li>
                <li onClick={dropdownToggle}><Link to="/bolum">Endüstri Mühendisliği</Link></li>
                <li onClick={dropdownToggle}><Link to="/bolum">Elektrik Elektronik Mühendisliği</Link></li>
              </ul>
            </li>
            <li className="nav__item">
              <div className="dropdownwrapper">
                <Link to="/arastirma">
                  Araştırma
                </Link>
              </div>
            </li>
            <li className="nav__item">
              <div className="dropdownwrapper">
                <Link to="/yerleskeler">
                  Yerleşkeler
                </Link>
              </div>
            </li>
            <li className="nav__item">
              <Link to="/register">
                Register
              </Link>
            </li>
          </ul>
          <div className="login">
            <Link className="s" to="/login">
              <box-icon name='log-in' color='#f3f0ef' ></box-icon>
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