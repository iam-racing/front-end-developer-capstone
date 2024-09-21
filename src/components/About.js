import marioAndAdrianA from "../assets/mario-and-adrian-a.jpg"
import marioAndAdrianB from "../assets/mario-and-adrian-b.jpg"
import "../css/About.css"

const About = () => (
    <section className="container-about">
        <section className="col-1">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
        </section>
        <section className="col-2">
            <img className="img-1" src={ marioAndAdrianA } alt="Mario and Adrian."/>
        </section>
        <section className="col-3">
            <img className="img-2" src={ marioAndAdrianB } alt="Mario and Adrian."/>
        </section>
    </section>
);

export default About