import { useEffect, useState } from "react"
import { API_URL, API_TOKEN } from "../../consts"
import Card from "./Card"
import axios from "axios"


const CoronaForCountry = () => {
    const [data,setData] = useState([])
    const [queryText,setQueryText] = useState("")
    const [loading,setLoading] = useState(false)
    const fetchData = async() => {
         setLoading(true)
         const response = await axios.get(`${API_URL}countriesData?country=${queryText}`, {
         headers: {
            authorization: API_TOKEN
        }
        
    }) 
    setLoading(false)
    setData(response.data.result)
}
    useEffect(() => {
      fetchData()
    },[queryText])
      return(
          <>
          <div className="mb-4">
                  <input value={queryText} onChange={(e)=> {setQueryText(e.target.value)}} 
                  className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 focus:outline-none shadow-green-600 "
                  placeholder="Search.."
                  />
          </div>
          <div className="grid grid-cols-4 gap-4">
                {loading && <p>Loading..</p>}
                {data.map((item) => {
                    return(
                        <Card key={item.country} country={item.country} totalDeaths={item.totalDeaths}  totalCase={item.totalCases} totalRecovered={item.totalRecovered} newCases={item.newCases} newDeaths={item.newDeaths} />
                    )
                })}
          </div>
          </>
      )
}

export default CoronaForCountry