import propTypes from 'prop-types'

const Logo = ({logo,title}) => {

      return(
      
        <div className='flex items-center'>
             <img src={logo} alt={title} className="mr-3 h-12" />
             <span className='self-center text-xl font-semibold whitespace-nowrap text-white '>
                 {title}
             </span>
        </div>

      )

     
}

Logo.propTypes = {
    title:propTypes.string,
    logo:propTypes.string
}
Logo.defaultProps = {
    title:'Corona App',
    logo:'https://cdn.pixabay.com/photo/2020/03/22/10/17/covid-19-4956579_1280.png'
}
export default Logo 