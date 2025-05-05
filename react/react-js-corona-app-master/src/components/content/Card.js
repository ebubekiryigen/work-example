import propTypes from 'prop-types'

const CountryImage = 'https://kolanhastanesi.com.tr/images/uploads/3d946d6ec995cd440ffe21bb50e8b755.jpg'

const Card = ({country,totalCase,totalDeaths,totalRecovered,newDeaths,newCases}) => {
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-md cursor-pointer hover:shadow-lg hover:scale-105 transition-all ">
               <img alt="Country" src={CountryImage} className="w-full"  />
               <div className="px-6 py-4">
                   <div className="font-bold text-xl mb-2">{country}</div>
                     <p className="text-gray-700 text-base">
                         Total Case : {totalCase}
                     </p>
                     <p className="text-gray-700 text-base">
                         Total Deaths : {totalDeaths}
                     </p>
                     <p className="text-red-700 text-base">
                          New Cases : {newCases}
                     </p>
                     <p className="text-red-700 text-base">
                         New Deaths : {newDeaths}
                     </p>
               </div>
               <div className="px-6 pt-4 pb-2">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2 mr-2 ">
                              #{totalRecovered}
                      </span>
               </div>
        </div>
    )
}

Card.propTypes = {
    country:propTypes.string,
    totalCase:propTypes.string,
    totalRecovered:propTypes.string,
    totalDeaths: propTypes.string,
    newCases:propTypes.string,
    newDeaths: propTypes.string
}
Card.defaultProps = {
    country:"Null",
    totalCase:"Null",
    totalRecovered:"Null",
    totalDeaths: "Null"

}

export default Card