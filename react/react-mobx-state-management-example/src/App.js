import { useState } from "react";
import { observer } from "mobx-react";
import Count from "./Count";
const App=observer((data)=>{
  const [state,setState] = useState("ebubekir")
  console.log(data)
  return(
    <div>
      <h1>{data.store.count}</h1>
      <Count />
      <button onClick={()=>{
            data.store.incWithParams(10)
        }}>10 Artır</button>
    </div>
  )
}) 

export default App;
