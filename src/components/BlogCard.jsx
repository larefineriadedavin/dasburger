import PropTypes from 'prop-types'; 


export default function BlogCard(props) {
    return (
        <div className="card--blog">
            <h3 className="card--blog--title">{props.web}</h3>
            <p className="card--blog--text">{props.comment}</p>
            <img src={`/images/${props.userImage}`} className="card--blog--image"/>
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
            