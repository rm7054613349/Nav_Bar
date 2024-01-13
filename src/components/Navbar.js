import React, { useState } from "react";
import "./navbar.css";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>N</span>av
            <span>B</span>ar
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>



            <li>
            <NavLink to="/service">Our Services</NavLink>
            </li>
            <li>
            <NavLink to="/regional">Regional Office</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://leetcode.com/wwwritesh72660/"
                target="_ram">
                <SiLeetcode className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/rm7054613349?tab=repositories"
                target="_ram">
                <FaGithub className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ritesh-mishra-068bb8221"
                target="_ram">
                <FaLinkedin className="youtube" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

     
    </>
  );
};

export default Navbar;