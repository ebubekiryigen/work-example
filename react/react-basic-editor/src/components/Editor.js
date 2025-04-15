import { useState } from "react"
import Button from "./Button"
import data from '../data'
import Content from "./Content"


export default function Editor(){
    const handleMouseUp = () =>{
        window.getSelection().toString().style.cssText = "text-align:center;"
    }


    return(
        <section className="editor-container">
            <header>
                {data.map((item,key)=><Button onClick={()=>{
                const pg = document.querySelector("#pg")
                pg.style.cssText += `${item.order}`
                }} item={item} key={key} />)}
            </header>
            <main>
                <Content onMouseUp={handleMouseUp} />
            </main>
        </section>
    )
}