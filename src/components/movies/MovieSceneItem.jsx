import { Link } from 'react-router';

import PropTypes from 'prop-types';

function MovieSceneItem({ oneMovie }) {
    return (
        <Link to={"detail/" + oneMovie.movie}>

            <img src={oneMovie.poster} alt="" />
            <h3>{oneMovie.movie} {oneMovie.year}</h3>
            <p>{oneMovie.full_line}</p>

        </Link>

    );
}

MovieSceneItem.propTypes = {
    oneMovie: PropTypes.object
}

export default MovieSceneItem;
