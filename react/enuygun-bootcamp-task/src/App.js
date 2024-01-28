import { useState } from "react";

function App() {

  const [route,setRoute] = useState('')
  const [errors,setErrors] = useState([])
  const [address,setAddress] = useState([])
  const [button,setButton] = useState(false)

  const addAdress = () => {
    setAddress([
         ...address,
         {
          name:"",
          enlem:"",
          boylam:"",
         }
    ])
  }

  const buttonDisabled = () => {
    address.map((add) => { 
     if(add.name.length !== 0 && add.enlem.length !== 0 && add.boylam.length !== 0) {
       setButton(true)
     } else {
      setButton(false)
     }
 })
}

  const updateName = (id,value) => {
        buttonDisabled()
        setAddress([ 
          ...address.map((item,index) => {
              if(index === id) {
                item.name = value
              }
              if(item.name === value && index !== id && item.name.length > 0 ) {
                setErrors([
                  {
                    title : "Daha Önce yazdığın durak adıyla bu durak adının eşleşmemesi lazım",
                    id: id
                  }
                ])
              }
              else if(item.name !== value && index !== id && item.name.length > 0 ) {
                console.log("bu alana girdin silme");
                setErrors([
                  ...errors.filter((err,index) => err.id !== id)
                ])
              }
              return item
        })])
  }
  const updateEnlem = (id,value) => {
    setAddress([ 
      ...address.map((add,index) => {
          if(index === id) {
            add.enlem = value
          }
          return add
    })])
}
const updateBoylam = (id,value) => {
  setAddress([ 
    ...address.map((add,index) => {
        if(index === id) {
          add.boylam = value
        }
        return add
  })])
}

  return (
    <div className="App" >
      
          <input type="text" value={route} onChange={(e) => setRoute(e.target.value)} placeholder="Güzergah Adı"  />
          <button onClick={()=> addAdress()}>Yeni Durak ekle</button>
          <hr />
          {
           address.map((address,index) => (
            <>
            <div style={{padding:"10px"}} key={index}>
            <input type="text" value={address.name} onChange={(e) => (updateName(index,(e.target.value))) } placeholder="Durak ismi"  />
             {errors.map((erorrs) => {
              if(index === erorrs.id) {
                return(erorrs.title)
              } 
             } )}
            <input type="text" value={address.enlem} onChange={(e) => updateEnlem(index,(e.target.value))}  placeholder="Enlem"  />
            <input type="text" value={address.boylam} onChange={(e) => updateBoylam(index,(e.target.value))}   placeholder="Boylam"  />
            </div>
            <hr/>
            </>
          ))
          }
          <button disabled={errors.length > 0 || button === false  } >Kaydet</button>  

    </div>
  );
}
export default App;
