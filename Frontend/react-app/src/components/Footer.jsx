import React from 'react';
import '../style/Footer.scss'


const Footer = () => {
  return (
    <>
     <footer className="footer">
      <div className="footer-content">
      
        <p>&copy; {new Date().getFullYear()} Ahmad Murtaza Khan. All rights reserved. <h>For any Querry</h> </p>
        <div className="contact-info">
        <p>
          Contact Us:
          <span className="phone-icon" role="img" aria-label="phone">
            📞
          </span>
          <a href="tel:+9i987654321">+91987654321</a>
        </p>
      </div>
        </div>
    </footer>
    </>
   
  );
}

export default Footer;