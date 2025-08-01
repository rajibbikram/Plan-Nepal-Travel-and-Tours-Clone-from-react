import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Logo from '../../image/logo.gif'

const Header = () => {
  return (
    <header>
      <div className="header-first pt-2">
        <div className="containerr d-flex">

          <div className="logo ">
            <a href="">
              <img src={Logo} alt="logo" />
            </a>
          </div>
          <div className="d-flex ">
            <div className=" text-light scroll_aa">
              <marquee behavior="scroll">
                Agency for Tour &amp; Trekking in Nepal
              </marquee>
            </div>
            <ul className="header-icon  d-flex gap-3 text-light">
              <li>
                <a href="/" target="_blank">
                  <i className="fa-brands fa-facebook" />
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  <i className="fa-brands fa-google" />
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  <i className="fa-brands fa-twitter" />
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  <i className="fa-brands fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  <i className="fa-brands fa-instagram" />
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  <i className="fa-brands fa-pinterest" />
                </a>
              </li>
            </ul>
            <ul className="header-cont d-flex gap-5 text-light">
              <li>
                <a href="">
                  {" "}
                  <i className="fa-solid fa-phone" /> +977-1-4435300
                </a>
              </li>
              <li>
                {" "}
                <a href="">
                  <i className="fa-solid fa-envelope" /> info@plannepal.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header-sec">
        <div className="containerr">
          <div className="row">
            <ul className="header-icon col-lg-12 d-flex gap-4 text-light py-2">
              <li>
                <a href="/" target="_blank">
                  Home
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  About Us
                  <i className="fa-solid fa-angle-down" />
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  Nepal
                  <i className="fa-solid fa-angle-down" />
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  Tibat
                  <i className="fa-solid fa-angle-down" />
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  Bhutan
                  <i className="fa-solid fa-angle-down" />
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  Multi Country
                  <i className="fa-solid fa-angle-down" />
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  Heli Tour <i className="fa-solid fa-angle-down" />
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  Day{" "}
                </a>
                <a href="/">Tours</a>
              </li>
              <li>
                <a href="/" target="_blank">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>

  );
};

export default Header;
