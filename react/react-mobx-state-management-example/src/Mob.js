import { reaction, when } from "mobx"
import { useEffect, useState } from "react"
import { storeWithObject } from "./StoreObject"


const Mob = () => {

    const [arr,setArr] = useState([])
    reaction(()=>storeWithObject.count,()=>{
        console.log("count değişti")
        console.log("count :", storeWithObject.count)
        setArr([...storeWithObject.getUser()])
    })
    when(()=>storeWithObject.count > 5, ()=>{
        console.log("5 den büyük oldu")
    })

    useEffect(()=>{
        storeWithObject.addUser("ebubekir")
        storeWithObject.addUser("ebubekir")
        storeWithObject.addUser("ebubekir")
        storeWithObject.addUser("ebubekir")
        storeWithObject.addUser("ebubekir")
        storeWithObject.addUser("ebubekir")
        storeWithObject.addUser("ebubekir")
        storeWithObject.addUser("ebubekir")
        storeWithObject.addUser("ebubekir")
        storeWithObject.addUser("ebubekir")
        storeWithObject.addUser("ebubekir")
        storeWithObject.addUser("ebubekir")
        storeWithObject.addUser("ebubekir")
        storeWithObject.addUser("ebubekir")
        setTimeout(()=>{
            storeWithObject.addUser("ebubekir")
        },5000)
    },[])

    return(
        <div>
            {arr}
        </div>
    )
}

export default Mob