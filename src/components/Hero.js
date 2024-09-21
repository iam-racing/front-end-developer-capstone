import image from "../assets/little-lemon-restaurant-preview-hero.jpg"
import "../css/Hero.css"

const Hero = () => (
    <section className="container-hero">
        <section className="col-1">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button>Reserve a Table</button>
        </section>
        <section className="col-2">
            <img src={ image } alt="Preview Image of the Little Lemon Restaurant."/>
        </section>
    </section>
);

export default Hero