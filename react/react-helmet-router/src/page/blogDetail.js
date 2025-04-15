import { Helmet } from "react-helmet"
import { useParams } from "react-router-dom"


export default function BlogDetail(){

    const {id} = useParams()

    return(

        <div>
            <Helmet>
                <title>Post {id}</title>
            </Helmet>
            buraso post {id}
        </div>
    )
}