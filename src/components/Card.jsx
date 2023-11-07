
import PropTypes from 'prop-types';

export default function Card(props) {
    return (
        <section className="card">
            <img src={`/images/${props.cardImage}`} alt={props.imageAlt} className="card-image" />
            <h3 className="card-title">{props.title}</h3>
            <p className="card-text">{props.text}</p>
        </section>
    )
}

Card.propTypes = {
    cardImage: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

