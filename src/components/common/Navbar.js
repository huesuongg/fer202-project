import React from "react";
import { Link } from "react-router-dom";
import "../../styles/common/navbar.css";

export const LandingNavbar = () => {
  return (
    <header className="main-header">
      <div className="logo">
        <span className="logo-hat">Unpinterest</span>
        <span className="logo-de">Project</span>
      </div>

      <nav className="nav-menu">
        <a href="#">Trang chủ</a>
        <a href="#">Sản phẩm</a>
        <a href="#">Kế hoạch</a>
        <a href="#">Hỗ trợ</a>
      </nav>

      <div className="search-bar">
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Tìm kiếm..." />
      </div>

      <div className="nav-button">
        {/* <i className="fas fa-user"></i> */}
        <a href="./login">Đăng nhập</a>
        <a href="./register">Đăng kí</a>
      </div>
    </header>
  );
};

export const HomeNavbar = () => {
  return (
    <header className="main-header">
      <div className="logo">
        <span className="logo-hat">Hat</span>
        <span className="logo-de">De</span>
      </div>

      <nav className="nav-menu">
        <a href="#">Home</a>
        <a href="#">Nav 1</a>
        <a href="#">Nav 2</a>
        <a href="#">Nav 3</a>
      </nav>

      <div className="search-bar">
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Search..." />
      </div>

      <div className="nav-icons">
        <i className="far fa-heart"></i>
        <i className="fas fa-shopping-cart"></i>
        <i className="fas fa-user"></i>
      </div>
    </header>
  );
};
