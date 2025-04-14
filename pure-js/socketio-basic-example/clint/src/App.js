import Palette from "./component/Palette";
import {useEffect, useState} from "react"
import {init, sub} from "./socketApi"

function App() {
  const [activeColor,setActiveColor] = useState('#000')

  useEffect(()=>{
    init();
    sub((color)=>{
      setActiveColor(color)
    });
  },[])

  return (
    <div className="App" style={{backgroundColor:activeColor}}>
        <h1>{activeColor}</h1>
        <Palette activeColor={activeColor} />
    </div>
  );
}

export default App;
