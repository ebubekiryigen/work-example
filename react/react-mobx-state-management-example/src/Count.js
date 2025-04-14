import { myStore } from "."


const Count=()=> {
    return(
        <>
        <h3>Count : {myStore.count}</h3>
        <button onClick={()=>{
            myStore.inc()
        }}>Artır</button>
         <button onClick={()=>{
            myStore.dec()
        }}>Azalt</button>

        </>
    )
}

export default Count