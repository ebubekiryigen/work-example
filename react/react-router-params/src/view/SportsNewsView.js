import { useParams } from "react-router-dom"

const SportsNewView = ()=>{
    const {id} = useParams()
    return (
        <div>
            Spor haberleri {id}
        </div>
    )
}

export default SportsNewView