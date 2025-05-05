import Header from "./components/header/Header";
import CoronaForCountry from "./components/content/CoronaForCountry"
import {useState} from 'react'
import RecordedCorona from "./components/content/RecordedCorona";
function App() {
  const [key,setKey] = useState(1)
  return (
    <>
    <Header onMenuChange={(_key) => {
      setKey(_key)
    }} />
    <div className="md:container md:mx-auto p-8 h-screen page-content">
          {key === 1 && <CoronaForCountry />}
          {key === 2 && <RecordedCorona />}
    </div>
    </>
  );
}

export default App;
