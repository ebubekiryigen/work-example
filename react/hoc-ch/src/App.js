import logo from './logo.svg';
import './App.css';
import useWindowsSize from './hooks/useWindowsSize';
import useFetch from './hooks/useFetch';
import Hello from './components/Hello';
import Hi from './components/Hi';



function App() {
  const {width,height} = useWindowsSize()
  const {data,loading,error} = useFetch('https://jsonplaceholder.typicode.com/todos/1')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
           {width} | {height}
           <p>Error : {JSON.stringify(error)}</p>
           <p>Loading : {JSON.stringify(loading)}</p>
           <p>Data : {JSON.stringify(data)} </p>

           <Hello />
           <Hi />
      </header>
    </div>
  );
}

export default App;
