import './App.css';
import {Transition} from "react-transition-group"
import { useState } from 'react';

const duration = 300
const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0
}
const transitionStyles = {
    entering: {opacity: 1, backgroundColor: 'purple', height: '40px'},
    entered: {opacity: 1, backgroundColor: 'red', height: "80px"},
    exiting: {opacity: 0, backgroundColor: 'yellow'},
    exited: {opacity: 0, backgroundColor: 'white'}

}

const FadeComponent=({in:inProps})=>{
  return(
    <Transition in={inProps} timeout={duration}>
    {state=>(
     <div style={{
       ...defaultStyle,
       ...transitionStyles[state]
    }}>
    {JSON.stringify(state)}Merhaba kanka
    </div>
    )}
 </Transition>
  )
}


function App() {
  const [show,setShow] =useState(false)
  return (
    <div className="App">
      <button onClick={()=>{setShow(!show)}}>
        Başlat
      </button>
     <FadeComponent in={show} />
    </div>
  );
}

export default App;
