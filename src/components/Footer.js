import logo from "../assets/little-lemon-restaurant-logo-footer.png"

const Footer = () => (
  <>
    <img src={ logo } alt="Little lemon restaurant logo." width="150" height="250"/>
    <h3>Navigation</h3>
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
    <h3>Contact</h3>
    <nav>
      <ul>
        <li><a href="/adress">Adress</a></li>
        <li><a href="/phone">Phone Number</a></li>
        <li><a href="/email">Email</a></li>
      </ul>
    </nav>
    <h3>Social Media</h3>
    <nav>
      <ul>
        <li><a href="//facebook.com">Facebook</a></li>
        <li><a href="//instagram.com">Instagram</a></li>
        <li><a href="//twitter.com">Twitter</a></li>
      </ul>
    </nav>
  </>
);

export default Footer;


