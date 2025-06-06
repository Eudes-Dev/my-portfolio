import PropTypes from 'prop-types'

const Button = ({ name, isBeam = false, containerClass }) => {
    return (
        <button className={`btn md:max-w-lg ${containerClass}`}>
            {isBeam && (
                <span className={'relative flex h-3 w-3'}>
                    <span className={'btn-ping'}/>
                    <span className={'btn-ping_dot'}/>
                </span>
            )}
            {name}
        </button>
    )
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    isBeam: PropTypes.bool,
    containerClass: PropTypes.string,
}
export default Button
