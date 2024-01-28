import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState()
  const [todo, setTodo] = useState()
  useEffect(()=> {
    const formData = new FormData()
    formData.append('action','todo')
    fetch(`${process.env.REACT_APP_CONNECTION}`,{
      method:'POST',
      body:formData
    })
    .then(res=> res.json())
    .then(data=> setTodos(data))

  },[])
  console.log(todos)


  const addTodo = () => {
    if(!todo) {
      alert('todo boş')
      return
    }
    const formData = new FormData()
    formData.append('todo',todo)
    formData.append('action','add-todo')
    fetch(`${process.env.REACT_APP_CONNECTION}`,{
      method:'POST',
      body:formData
    })
    .then(res  => res.json())
    .then(data => {
      if(data.error) {
        alert(data.error)
      } else {
        setTodos([data, ...todos])
        setTodo("")
      }
    })
    
  }
  const deleteTodo = todoId => {
    const formData = new FormData()
    formData.append('id',todoId)
    formData.append('action','delete-todo')
    fetch(`${process.env.REACT_APP_CONNECTION}`,{
      method:'POST',
      body:formData
    })
    .then(res  => res.json())
    .then(data => {
      if(data.error) {
        alert(data.error)
      } else {
        setTodos(todos.filter(todo => todo.id !== todoId))
      }
    })
  }

  const doneTodo = (todoId, done) => {
    const formData = new FormData()
    formData.append('id',todoId)
    formData.append('done', done === "1" ? "0" : "1")
    formData.append('action','done-todo')
    fetch(`${process.env.REACT_APP_CONNECTION}`,{
      method:'POST',
      body:formData
    })
    .then(res  => res.json())
    .then(data => {
      if(data.error) {
        alert(data.error)
      } else {
        const newTodos = todos.map(todo => {
          if(todo.id === todoId) {
            todo.done = todo.done === "1" ? "0" : "1";
          }
          return todo
        })
        setTodos(newTodos)
      }
    })
  }
  return (
    <div>
         <h1>Todo Uygulamam</h1>
         <div>
            <input type="text" value={todo} placeholder='todo' onChange={(e)=> {setTodo(e.target.value)}} />
            <button onClick={addTodo}>ekle</button>
         </div>
         {todos && (
          <ul className="todos">
            {todos.map(todo => (
                <li key={todo.id} className={todo.done === "1" ? 'done' : ''}>
                <span onClick={() => doneTodo(todo.id, todo.done)}> {todo.todo}</span>
                <button onClick={() => deleteTodo(todo.id)}>sil</button>
                </li>
            ))}
          </ul>
         )}
    </div>
  );
}

export default App;
