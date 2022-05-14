import React, { useState, useEffect } from "react";
import "./Navbar.css";
import "../../Images/logo.png"
//import { click } from "@testing-library/user-event/dist/click";

import { Link } from "react-router-dom";

function Navbar() {
  const [show, setShow] = useState(true)
  const controlNav = () => {
    if (window.scrollY > 100) {
      setShow(false)
    } else {
      setShow(true)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", controlNav)
    return () => {
      window.removeEventListener("scroll", controlNav)
    }
  }, [])

  const [dropdown, setDropdown] = useState("dropdown-menu")
  const dropdownToggle = () => {
    if (dropdown === "dropdown-menu") {
      setDropdown("dropdown-active");
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
  };
  return (
    <div>
      <nav className={`nav  ${show && "nav_hide"}`}>
      <Link to="/"><h3 className="title">İSTANBUL UNIVERSITESI - CERRAHPAŞA</h3></Link>
        <Link to="/">
          <img width="70" height="%70" src="https://upload.wikimedia.org/wikipedia/tr/thumb/6/6a/Istanbul_%C3%BCniversitesi-cerrahpa%C5%9Fa_logosu.png/241px-Istanbul_%C3%BCniversitesi-cerrahpa%C5%9Fa_logosu.png" alt="iucLogo" />
        </Link>
        <ul className={active}>
          <li className="nav__item">
            <Link to="/hakkimizda">Hakkımızda</Link>
          </li>
          <li className="nav__item">
          <Link to="/akademik">Akademik</Link>
          </li>
          <li className="nav__item">
            <Link to="/ogrenci">Ogrenci</Link>
          </li>
          <li className="nav__item">
            <Link to="/bilgiislem" onClick={dropdownToggle}>
              Bilgi İşlem
              <ul className={dropdown}>
                <li onClick={dropdownToggle}><Link to="/bilgiislem/a1">A1</Link></li>
                <li onClick={dropdownToggle}><Link to="/bilgiislem/a2">A1</Link></li>
                <li onClick={dropdownToggle}><Link to="/bilgiislem/a3">A1</Link></li>
              </ul>
            </Link>
          </li>
          <li className="nav__item">
          <Link to="/arastirma">
              Araştırma
              </Link>
          </li>
          <li className="nav__item">
          <Link to="/yerleskeler">
              Yerleşkeler
              </Link>
          </li>
        </ul>
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