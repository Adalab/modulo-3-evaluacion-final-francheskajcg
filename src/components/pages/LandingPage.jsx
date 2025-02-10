import PropTypes from 'prop-types';

import MovieSceneList from '../movies/MovieSceneList';
import Filter from '../Filter';

function LandingPage({ movies, handleInputFilterName, handleInputFilterYear, years, filterName, filterYear }) {

    return (
        <>

            <Filter handleInputFilterName={handleInputFilterName}
                handleInputFilterYear={handleInputFilterYear}
                years={years}
                filterName={filterName}
                filterYear={filterYear}></Filter >

            {
                movies.length === 0 ? (
                    <p>No tenemos esa película 🥲 </p>
                ) : (
                    <MovieSceneList
                        movies={movies}>
                    </MovieSceneList>
                )
            }
        </>
    );
}


LandingPage.propTypes = {
    movies: PropTypes.array,
    handleInputFilterName: PropTypes.object,
    handleInputFilterYear: PropTypes.object,
    years: PropTypes.object,
    filterName: PropTypes.object,
    filterYear: PropTypes.object

};

export default LandingPage;