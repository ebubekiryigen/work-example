import { useEffect, useState } from 'react';
import './App.css';
import Bar from './componenets/Bar';
import Chart from './componenets/Chart';

function App() {

  const getRandomNumber = (value) => {
    return Math.floor(Math.random() *value + 1)
  }
  const [data,setData] = useState([
    {
      id:1,
      title:"Vue.js",
      color:"#00b77e",
      value:getRandomNumber(110)
    },
    {
      id:2,
      title:"React.js",
      color:"#7ddfff",
      value:getRandomNumber(120)
    },
    {
      id:3,
      title:"Angular.js",
      color:"#e6323e",
      value:getRandomNumber(80)
    },
    {
      id:4,
      title:"Node.js",
      color:"#68a25c",
      value:getRandomNumber(100)
    },
    {
      id:5,
      title:"Ember.js",
      color:"#e14a30",
      value:getRandomNumber(25)
    },
  ])

  const findBigBarItem = (dis) => {
    return  dis.sort((val1,val2)=>val2.value-val1.value)[0].value
  }
  const [bigData,setbigData] = useState(findBigBarItem(data))

  const setDataWithRandom = () => {
    let des = [... data]
    des.forEach((item) => {
      switch(item.id) {
      case 1:
      item.value+=getRandomNumber(5400)
      break
      case 2:
        item.value+=getRandomNumber(5500)
      break
      case 3:
      item.value+=getRandomNumber(2500)
      break
      case 4:
      item.value+=getRandomNumber(5300)
      break
      case 5:
      item.value+=getRandomNumber(1000)
      break
      }
    })
    setbigData(findBigBarItem(des))
    setData(des)
  }
  useEffect(() => {
    let timer;
    timer = setInterval(()=> {
      setDataWithRandom()
    },500)
  },[])
 
  const renderDataItem = (item,index) => {
    let rate = item.value/bigData
    rate = rate * (1000 - 40)
    const percent = (rate*100) / 1040
    console.log(percent)
    return <Chart 
    key = {item.id} 
    backgroundColor={item.color} 
    width={percent+"%"} 
    text={item.title}
    count = {item.value}
    top = {(index === 0 ? 10 : (index*40)+20)+'px'}
     />
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="app-title">Freamworklerin Kullanıcı Sayısı</div>
        <hr />
        <hr />
        <Bar datas = {data}>
              {data.map((item,index) => renderDataItem(item,index)
              )}
        </Bar>
      </header>
    </div>
  );
}

export default App;
