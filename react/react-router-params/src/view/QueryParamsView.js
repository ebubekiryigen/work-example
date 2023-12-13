import { useSearchParams } from "react-router-dom"

const QueryParamsView = ()=> {
    const [searchParams] = useSearchParams()
    return(
        <div>
            Query pARAMETRESİ
            {searchParams.get('a5_max')}<br/>
            {searchParams.get('address_region')}<br/>
            {searchParams.get('price_min')}<br/>
            {searchParams.getAll('address_town')}<br/>

        </div>
    )
}

export default QueryParamsView