import PropTypes from 'prop-types';

export const GifItem = ({ title, url }) => {

    return (
        <div className="card">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )

}

// Tipado
GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

// Valores por defecto
GifItem.defaultProps = {
    // value: 0
}