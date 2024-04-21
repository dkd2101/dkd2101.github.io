import PropTypes from 'prop-types'

const Header = ({text}) => {
    return(
        <header>
            <h1 className="App-header">
                {text}
            </h1>
        </header>
    )
}

Header.defaultProps ={
    text: "Dylans Personal Website"
}

Header.propTypes ={
    text: PropTypes.string.isRequired
}

export default Header