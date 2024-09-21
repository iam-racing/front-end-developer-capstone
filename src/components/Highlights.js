import SpecialCard from "./SpecialCard";
import greekSalad from "../assets/specials-greek-salad.jpg";
import bruchetta from "../assets/specials-bruchetta.png";
import lemonDessert from "../assets/specials-lemon-dessert.jpg";
import "../css/Highlights.css";

const Highlights = () => (
    <section className="container-highlights">
        <section className="row-1">
            <h1 className="title">Specials</h1>
            <button>Online Menu</button>
        </section>
        <section className="row-2">
           <section className="col-1">
                <SpecialCard imageSrc={ greekSalad } dishName="Greek Salad" price="12.99" dishDescription="Our greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."></SpecialCard>
           </section>
           <section className="col-2">
                <SpecialCard imageSrc={ bruchetta } dishName="Bruchetta" price="5.99" dishDescription="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."></SpecialCard>
           </section>
           <section className="col-3">
                <SpecialCard imageSrc={ lemonDessert } dishName="Lemon Dessert" price="5.00" dishDescription="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."></SpecialCard>
           </section>
        </section>
    </section>
);

export default Highlights


