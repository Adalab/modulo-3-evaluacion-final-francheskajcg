import PropTypes from 'prop-types';

import { Link, useParams } from "react-router";



function DetailPage({ movies }) {

    const params = useParams();

    const movieDetail = movies.find(movieDetailObj => movieDetailObj.movie === params.movie)

    if (!movieDetail) {
        return (
            <div className="pageContainer">
                <h1>Película no encontrada</h1>
                <Link to="/" className="btn">Volver</Link>
            </div>
        )
    };

    return (
        <div className="pageContainer">

            <div className="detailMovie">
                <img className="detailMovie_img" src={movieDetail.poster} alt={movieDetail.movie} />
                <h1>{movieDetail.movie}</h1>
                <p className="textDetail">Director: {movieDetail.director}</p>
                <p>{movieDetail.full_line}</p>
                <p>
                    <a
                        href={movieDetail.audio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="audioLink"
                    >
                        Escuchar audio de la escena
                    </a>
                </p>
            </div>


        </div>

    );
}

DetailPage.propTypes = {
    movies: PropTypes.array
};

export default DetailPage;