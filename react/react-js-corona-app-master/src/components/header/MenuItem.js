import propTypes from 'prop-types'

const MenuItem = ({title,active,onClick}) => {
    return (
        <li>
        <a onClick={()=> {
            onClick(title)
        }} className={`block cursor-pointer border-0 py-2 pr-4 pl-3 ${active ? 'text-green-700' : 'text-gray-400'}`}> 
          {title}
        </a>
    </li>
    )
}

MenuItem.propTypes = {
    title:propTypes.string,
    active:propTypes.bool,
    onClick:propTypes.func
}
MenuItem.defaultProps = {
    title:'Corona App',
    active:false,
    onClick:()=>null

}

export default MenuItem