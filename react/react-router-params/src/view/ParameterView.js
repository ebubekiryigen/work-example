
import { useParams } from "react-router-dom"

const ParameterView = ()=>{
    const {id}=useParams()
    console.log(id)

    return(
        <div>
            GELEN PARAMETRE {id}
        </div>
    )
}

export default ParameterView
