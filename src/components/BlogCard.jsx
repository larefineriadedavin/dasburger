import PropTypes from 'prop-types';


export default function BlogCard(props) {
    return (
        <div className="card--blog">
            <h3>{props.web}</h3>
            <p>{props.comment}</p>
            <img src={`/images/${props.userImage}`} className="card--image"/>
        </div>
    )
} 


BlogCard.propTypes = {
    web: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    userImage: PropTypes.string.isRequired,
};

// GOOGLE MAPS
// 
// RAPPI         
// Una vez vine con mi mejor amiga, de verdad que el sitio era de su agrado, siempre me lo recomendó, ahora veo porque le gustaba tanto.           
            