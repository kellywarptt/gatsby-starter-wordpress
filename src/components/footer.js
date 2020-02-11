import React from 'react'
import { Link } from "gatsby"

import terraTrueIcon from "../assets/images/logo-mark.svg";
import terraTrueIconWhite from "../assets/images/logo-mark-white.svg";
import iconLinkedIn from "../assets/images/icon-li.svg";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Link to="/">
          <img src={terraTrueIcon} alt="TerraTrue Icon" className="colored" />
          <img src={terraTrueIconWhite} alt="TerraTrue Icon" className="white" />
        </Link>
        <ul>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/careers">Careers</Link>
          </li>
          <li>
            <Link to="/request-invite">Request Invite</Link>
          </li>
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
        </ul>
        <div className="socials">
          <a
            href="https://www.linkedin.com/company/terratrue/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={iconLinkedIn} alt="LinkedIn Icon" />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
