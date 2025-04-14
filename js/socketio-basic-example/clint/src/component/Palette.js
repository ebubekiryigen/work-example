
import { useState } from 'react'
import {send} from '../socketApi'

const Palette = ({activeColor}) =>{
        
        const [colors,setColors] = useState('')

        return(
            <div className="palette">
                <input type="color" value={activeColor} onChange={(e)=>setColors(e.target.value)} />
                <button onClick={()=>send(colors)}>Tıkla Renk Değişsin</button>
            </div>
        )

}

export default Palette