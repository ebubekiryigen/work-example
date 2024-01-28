import react from  "react"
import PropTypes from "prop-types"
import './form.css'

const Form = ({children}) => {
    return (
     <div className="form">

       {children}

     </div>
    )
}
Form.propTypes = {
   children : PropTypes.node,
}
Form.defaultProps = {
    children : null
}
export default Form