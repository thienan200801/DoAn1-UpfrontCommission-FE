import React from "react";
import Logo from "../../assets/Logo.png";

import "../Header/Header.css";

export default function Header() {
  return (
    <>
      <div className="headerContainer">
        <img src={Logo} alt="Logo" className="LogoNavbar" />
      </div>
    </>
  );
}
