import React from 'react';
import logoImage from '../assets/images/logo-white.svg';

const Footer = () => (
  <div className="footer" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <h3>&nbsp;</h3>
          <div className="footer-logo">
            <img src={logoImage} alt="logo" />
            <h3>Millien Enterprises</h3>
          </div>
        </div>
        <div className="col-sm-4 ml-auto">
          <h3>Contact</h3>
          <address>
            12 Park Lane
            <br />
            Jwagal, Lalitpur,
            <br />
            Nepal
          </address>
          <div>
            <a href="tel:+97715534106">
              +977 1 5534106
            </a>
          </div>
          <div>
            <a href="mailto:sushila.maharjan@gmail.com">
              sushila.maharjan@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright">
      <div className="container">
        &copy; Copyright &nbsp;
        <span id="copyrightYear">{new Date().getFullYear()}</span>
        . All right reserve.
      </div>
    </div>
  </div>
);

export default Footer;
