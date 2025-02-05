import PropTypes from 'prop-types';

function MovieSceneItem({ oneMovie }) {
    return (
        <>
            <img src={oneMovie.poster} alt="" />
            <h3>{oneMovie.movie} {oneMovie.year}</h3>
            <p>{oneMovie.full_line}</p>
        </>
    );
}

MovieSceneItem.propTypes = {
    oneMovie: PropTypes.object
}

export default MovieSceneItem;
