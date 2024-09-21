import ReviewCard from "./ReviewCard";
import barrySutton from "../assets/barry-sutton.jpg"
import ellenBaker from "../assets/ellen-baker.jpg"
import bruceReynolds from "../assets/bruce-reynolds.jpg"
import janeMeyer from "../assets/jane-meyer.jpg"
import "../css/Testimonials.css"

const Testimonials = () => (
    <section className="container-testimonials">
        <h1>Testimonials</h1>
        <section className="testimonials">
            <section className="col-1">
                <ReviewCard rating="5" imageSrc={ barrySutton } name="Barry Sutton" comment="The food was great!"></ReviewCard>
            </section>
            <section className="col-2">
                <ReviewCard rating="5" imageSrc={ ellenBaker } name="Ellen Baker" comment="I will come again."></ReviewCard>
            </section>
            <section className="col-3">
                <ReviewCard rating="5" imageSrc={ bruceReynolds } name="Bruce Reynolds" comment="The best restaurant in town!"></ReviewCard>
            </section>
            <section className="col-4">
                <ReviewCard rating="5" imageSrc={ janeMeyer } name="Jane Meyer" comment="Great restaurant."></ReviewCard>
            </section>

        </section>
    </section>

);

export default Testimonials