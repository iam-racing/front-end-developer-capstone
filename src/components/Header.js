import logo from "../assets/little-lemon-restaurant-logo-nav.png";
import "../css/Header.css";

const Header = () => (
  <header className="container-header">
    <img className="logo-header" src={ logo } alt="Little lemon restaurant logo."/>
    <nav className="nav-bar">
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservation">Reservations</a></li>
        <li><a href="/order">Order</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;