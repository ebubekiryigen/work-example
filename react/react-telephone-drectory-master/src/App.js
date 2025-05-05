import { useEffect, useState } from "react";

function App() {

  const [drectory,setDrectory] = useState([])
  const [name, setName] = useState('')
  const [number, setNumber] = useState()
  const [filter, setFilter] = useState('')

  const drectoryAdd = () =>{
    if(number === '' && name === ''){
      alert('İnputlar boş olamaz')
    }else {
      let random = Math.floor(Math.random(1) * 1000000)
      setDrectory([
        {
          id:random,
          name:name,
          phone:number
        },
        ...drectory
      ])
      setName('')
      setNumber('')
    }
  }

  const drectoryDelete = (id) => {
      const results = drectory.filter(item => item.id !== id)
      setDrectory([...results])
  }

  const filt = drectory.filter(item => {
      return Object.keys(item).some((key)=> item[key].toString().toLowerCase().includes(filter.toLowerCase()))
    } )

  const drectoryUpdateName = (event,id) =>{
       drectory.filter(item => item.id === id).name = event
  }
  const drectoryUpdateNumber = (event,id) =>{
    drectory.filter(item => item.id === id).number = event
}
  

  return (
    <div className="container">
        <h2>Telefon Rehberim</h2>
        <div className="filter">
          <input placeholder="Filtrele" value={filter} onChange={(e)=>{setFilter(e.target.value)}} />
        </div>
        <div className="directory">
          {filt.map((item,key)=>(
            <div className="directory-list">
              <ul key={key} className="list">
                <li>Adı :       <input defaultValue={item.name} onChange={e=>drectoryUpdateName(e.target.value,item.id)} className="list-inputs" /></li>
                <li>Numarası :  <input defaultValue={item.phone} onChange={e=>drectoryUpdateNumber(e.target.value,item.id)} className="list-inputs" /></li>
              </ul>
              <span onClick={()=>{drectoryDelete(item.id)}}>Sil</span>
            </div>
          ))}
        </div>
        <div className="form">
          <input placeholder="Ad" value={name} onChange={(e)=>setName(e.target.value)} />
          <input placeholder="Numara" value={number} onChange={(e)=>setNumber(e.target.value)} />
          <button onClick={()=>{drectoryAdd()}}>Ekle</button>
        </div>
    </div>
  );
}

export default App;
