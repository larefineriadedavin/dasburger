
import PropTypes from 'prop-types';

export default function Card(props) {
    return (
        <section className="card">
            <img src={`/images/${props.newitem.cardImage}`} alt={props.newitem.imageAlt} className="card-image" />
            <h3 className="card-title">{props.newitem.title}</h3>
            <p className="card-text">{props.newitem.text}</p>
        </section>
    )
}

Card.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    newitem: PropTypes.string.isRequired,
};

