import React, { Component } from 'react'
import { Link } from 'gatsby'

import Button from "../components/button";
import logo from "../assets/images/logo-white.svg";
import logoDark from "../assets/images/logo.svg";

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPositionY: 0,
      isOpen: false
    };
  }
  componentDidMount() {
    return window.addEventListener("scroll", debounce(this.handleScroll, 16));
  }
  componentWillUnmount() {
    return window.removeEventListener(
      "scroll",
      debounce(this.handleScroll, 16)
    );
  }
  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  handleScroll = () => {
    const scrollPositionY = +window.scrollY;
    return this.setState({ scrollPositionY });
  };
  render() {
    const isScrolling = !!this.state.scrollPositionY;
    return (
      <header
        className={`${this.state.isOpen ? "menu-opened" : ""} ${
          isScrolling ? "bgWhite" : "nav"
        }`}
      >
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" className="logo-white" />
              <img src={logoDark} alt="logo" className="logo-dark" />
            </Link>
          </div>
          <div className="burger-container" onClick={this.toggleMenu}>
            <div id="burger">
              <div className="bar topBar"></div>
              <div className="bar btmBar"></div>
            </div>
          </div>
          <nav id="main-nav">
            <ul className="menu">
              <li className="menu-item">
                <Link to="/about">About Us</Link>
              </li>
              <li className="menu-item">
                <Link to="careers">Careers</Link>
              </li>
              <li className="menu-item">
                <Button
                  name={"Request Invite"}
                  link="/request-invite"
                  color="orange"
                />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header
