import  axios  from "axios"
import { useEffect } from "react"
import { useState } from "react"
import User from "./User"

export default function Usercart(){

    useEffect(()=>{
        axios.get('https://randomuser.me/api/?results=5')
        .then(response => setUser(response.data.results))
    },[])
    const [user, setUser] = useState([])

    return(
        <div className="user-cart">
           {user.map((item,key)=><User data={item} key={key} />)}
        </div>
    )
}