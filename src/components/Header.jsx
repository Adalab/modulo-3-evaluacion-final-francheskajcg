import { Link, useLocation } from "react-router";


function Header() {

    const location = useLocation();

    return (
        <>
            <header className='header'>
                <h1 className='header_title'>Owen Wilson y sus WOW</h1>
                <p className='header_text'>Busca el WOW de Owen Wilson que mas te guste</p>

                {location.pathname.startsWith('/detail') && (
                    <Link to="/" className="btn">Volver</Link>
                )}

            </header>
        </>
    );
}

export default Header;