import logo from "../assets/little-lemon-restaurant-logo-nav.png"

const Navigation = () => (
  <>
    <img src={ logo } alt="Little lemon restaurant logo." width="200" height="50"/>
    <nav>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservation">Reservations</a></li>
        <li><a href="/order">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  </>
);

export default Navigation;


