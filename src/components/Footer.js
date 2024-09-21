import logo from "../assets/little-lemon-restaurant-logo-footer.png"
import "../css/Footer.css"

const Footer = () => (
  <footer className="container-footer">
    <img className="logo-footer" src={ logo } alt="Little lemon restaurant logo."/>
    <section>
      <h3>Navigation</h3>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservation">Reservations</a></li>
        <li><a href="/order">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </section>
    <section>
      <h3>Contact</h3>
      <ul>
        <li><a href="/adress">Adress</a></li>
        <li><a href="/phone">Phone Number</a></li>
        <li><a href="/email">Email</a></li>
      </ul>
    </section>
    <section>
      <h3>Social Media</h3>
      <ul>
        <li><a href="//facebook.com">Facebook</a></li>
        <li><a href="//instagram.com">Instagram</a></li>
        <li><a href="//twitter.com">Twitter</a></li>
      </ul>
    </section>
  </footer>
);

export default Footer;


