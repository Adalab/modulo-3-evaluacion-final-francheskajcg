

import { Link, useParams } from "react-router";



function DetailPage({ movies }) {

    const params = useParams();

    console.log(params.movie);

    const movieDetail = movies.find(movieDetailObj => movieDetailObj.movie === params.movie)

    if (!movieDetail) {
        return (
            <div className="pageContainer">
                <h1>Película no encontrada</h1>
                <Link to="/" className="btn">Volver</Link>
            </div>
        );
    }

    return (
        <div className="pageContainer">
            <div className="detailMovie">
                <img className="detailMovie_img" src={movieDetail.poster} alt={movieDetail.movie} />
                <h1>{movieDetail.movie}</h1>
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

            <Link to="/" className="btn">Volver</Link>
        </div>

    );
}

export default DetailPage;