import PropTypes from 'prop-types';

import MovieSceneList from '../movies/MovieSceneList';

function LandingPage({ movies }) {

    return (
        <>

            {movies.length === 0 ? (
                <p>No tenemos esa película 🥲 </p>
            ) : (
                <MovieSceneList
                    movies={movies}>
                </MovieSceneList>
            )}
        </>
    );
}


MovieSceneList.propTypes = {
    movies: PropTypes.array
};

export default LandingPage;