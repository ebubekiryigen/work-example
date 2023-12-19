const Button = (props) => {
    return(
        <button data-testid = {props.id} className={props.className} style={props.style} onClick={props.onClick}>{props.text}</button>
    )
}
export default Button