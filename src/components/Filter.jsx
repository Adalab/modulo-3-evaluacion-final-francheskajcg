import PropTypes from 'prop-types';

function Filter({ handleInputFilterName, handleInputFilterYear, years, filterName, filterYear }) {

    return (
        <>
            <form className="search_container">
                <label htmlFor="movie">Película:</label>
                <input
                    type="search"
                    placeholder="Nombre de la película"
                    onInput={handleInputFilterName}
                    value={filterName}
                />

                <label htmlFor="">Año:</label>
                <select id="year" value={filterYear}
                    onChange={handleInputFilterYear}>
                    <option value="">Todos los años</option>
                    {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
            </form>
        </>
    );
}


Filter.propTypes = {
    handleInputFilterName: PropTypes.object,
    handleInputFilterYear: PropTypes.object,
    years: PropTypes.object,
    filterName: PropTypes.object,
    filterYear: PropTypes.object

};
export default Filter;