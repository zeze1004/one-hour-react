import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar navbar-light bg-light">
          {/* react 누르면 home */}
          <Link to="/" className="nav-link">
            React
          </Link>
          {/* 메뉴 버튼 */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          {/* </div> */}
        </nav>
      </>
    );
  }
}

export default Header;
