import PropTypes from 'prop-types';

function Filter({ handleInputFilterName, handleInputFilterYear, years, filterName, filterYear }) {

    return (
        <>
            <form className="search_container">
                <label htmlFor="movie">Película:</label>
                <input
                    type="search"
                    placeholder="Filtra por película"
                    onInput={handleInputFilterName}
                    value={filterName}
                />

                <label htmlFor="">Año:</label>
                <select id="year" value={filterYear}
                    onChange={handleInputFilterYear}>
                    <option value="">Selecciona el año</option>
                    {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
            </form>
        </>
    );
}


Filter.propTypes = {

    handleInputFilterName: PropTypes.func,
    handleInputFilterYear: PropTypes.func,
    years: PropTypes.array,
    filterName: PropTypes.string,
    filterYear: PropTypes.string

};
export default Filter;