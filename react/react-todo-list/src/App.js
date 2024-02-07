import {useState,useEffect} from 'react'
import Form from './components/Form'
import Todo from './components/Todo'

function App() {

  const [dataTodos, setdataTodos] = useState([])
  const [textInput, setTextInput] = useState("")
  const [stat, setStat] = useState()
  const [filter, setFilter] = useState([])
  useEffect(()=> {
    getLocal()
  },[])
  useEffect(() => {
    switch(stat) {
      case "1":
        setFilter(dataTodos.filter((todo) => todo.complated === true))
        break;
       case "2":
          setFilter(dataTodos.filter((todo) => todo.complated === false))
        break;
         default:
          setFilter(dataTodos)
    }
    LocalSave()
  }, [dataTodos,stat]) 
  const LocalSave = () => {
         localStorage.setItem("dataTodos", JSON.stringify(dataTodos))
  }
  const getLocal = () => {
    if(localStorage.getItem("dataTodos") === null) {
        localStorage.setItem("dataTodos", JSON.stringify([]))
    }
    else {
      setdataTodos(JSON.parse(localStorage.getItem("dataTodos")))
    }
  }

  return (
    <div className="App">
             <div className="container p-3">
        <h1 className="app-title" id="header">to do Uygulaması</h1>
        <div className="card">
            <div className="card-header">
                Yeni Görev
            </div>
            <div className="card-body">
             <Form textInput={textInput} setTextInput={setTextInput} dataTodos={dataTodos} setdataTodos={setdataTodos} setStat = {setStat}  />
            </div>
        </div>
            <Todo dataTodos={dataTodos} setdataTodos={setdataTodos} filter={filter} />
    </div>
    </div>
  );
}

export default App;
