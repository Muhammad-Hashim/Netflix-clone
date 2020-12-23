// import React from "react";
import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleshow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleshow(true);
      } else handleshow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_log"
        src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png"
        alt="netfilx_log"
      />
      <img
        className="nav_avatar"
        src="https://dwglogo.com/wp-content/uploads/2019/02/Netflix_N_logo.png"
      ></img>
    </div>
  );
}

export default Nav;
