import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

const Home=(props:any)=> {
  return (
    <div className={styles.container}>
      <ul>
       {props.data?.map((item:any)=> {
           return(
            <li key={item.title}>
                {item.title}
            </li>
           )
       })}
       </ul>
    </div>
  )
}

export default Home

export async function getServerSideProps() {
   let data=[]
   const result=await fetch('https://jsonplaceholder.typicode.com/todos')
   data=await result.json()
   return{
      props:{
        data
      }
   }
}
