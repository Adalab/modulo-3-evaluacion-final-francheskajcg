import PropTypes from 'prop-types';

import MovieSceneItem from './MovieSceneItem';

function MovieSceneList({ movies }) {


    return (

        <ul className="list-container">
            {movies.map((oneMovie) => (
                <li key={oneMovie.timestamp}
                    className="card">
                    <MovieSceneItem
                        oneMovie={oneMovie}>
                    </MovieSceneItem>
                </li>
            ))}
        </ul>
    );
}

MovieSceneList.propTypes = {
    movies: PropTypes.array
}

export default MovieSceneList;