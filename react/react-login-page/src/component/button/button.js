import react from "react"
import PropTypes from "prop-types"
import './button.css'

const Button = ({text,onClick}) => {
return (

<button className="Button" onClick={onClick}>{text}</button>

)

}
Button.propTypes = {
    onClick: PropTypes.func,
    text : PropTypes.string
}
Button.defaultProps = {
    text : "Tıkla"

}


export default Button