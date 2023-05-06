import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
LayoutHeader.propTypes = {};

function LayoutHeader(props) {
  return (
    <div style={{ marginBottom: '85px' }}>
      <header>
        <div className="container-menu-desktop">
          <div className="wrap-menu-desktop">
            <nav className="limiter-menu-desktop container">
              <a href="/" className="logo">
                <img src="images/icons/logo-01.png" alt="IMG-LOGO" />
              </a>

              <div className="menu-desktop">
                <ul className="main-menu">
                  <li>
                    <NavLink className="nav-link" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/products">
                      Products
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/cart">
                      Cart
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/about">
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/contact">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div className="wrap-icon-header flex-w flex-r-m">
                <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                  <i className="zmdi zmdi-search"></i>
                </div>

                <NavLink to="/cart"
                  className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
                  data-notify="2"
                >
                  <i className="zmdi zmdi-shopping-cart"></i>
                </NavLink>

                <button 
                  className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
                  data-notify="0"
                >
                  <i className="zmdi zmdi-favorite-outline"></i>
                </button>
              </div>
            </nav>
          </div>
        </div>

        <div className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
          <div className="container-search-header">
            <button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
              <img src="images/icons/icon-close2.png" alt="CLOSE" />
            </button>

            <div className="wrap-search-header flex-w p-l-15">
              <button className="flex-c-m trans-04">
                <i className="zmdi zmdi-search"></i>
              </button>
              <input className="plh3" type="text" name="search" placeholder="Search..." />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default LayoutHeader;
