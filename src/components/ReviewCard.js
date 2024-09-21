import "../css/ReviewCard.css"

const ReviewCard = (props) => (
    <section className="container-review">
        <h2>Rating { props.rating }/5</h2>
        <img src={ props.imageSrc } alt="Profile photo."/>
        <h2>{ props.name }</h2>
        <p>{ props.comment }</p>
    </section>
);

export default ReviewCard