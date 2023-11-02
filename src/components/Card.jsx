
import PropTypes from 'prop-types';

export default function Card(props) {
    return (
        <section className="card">
            <img src={props.imageSrc} alt={props.imageAlt} className="card-image" />
            <h3 className="card-title">{props.title}</h3>
            <p className="card-text">{props.text}</p>
        </section>
    )
}


Card.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};
