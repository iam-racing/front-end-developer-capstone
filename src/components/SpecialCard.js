import "../css/SpecialCard.css"

const SpecialCard = (props) => (
    <section className="container-card">
        <img src={ props.imageSrc } alt="Specials dish."/>
        <section className="row-1">
            <h1 className="dishName">{ props.dishName }</h1>
            <p className="price"> $ { props.price }</p>
        </section>
        <p className="dishDescription"> { props.dishDescription }</p>
        <p className="orderDelivery">Order a delivery</p>
    </section>
);

export default SpecialCard