import './App.css';
import React,{useState} from "react"
import Card from './component/card/card.js'


function App() {
  const [cardList,setcardList] = useState([
    {
      id:1,
      price:19000,
      name:"iphone 12",
      image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=90&.v=1617135051000",
      title: "Phone",
    },
    {
      id:1,
      price:11000,
      name:"iphone 11",
      image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-green-select-2019_GEO_EMEA?wid=834&hei=1000&fmt=jpeg&qlt=95&.v=1567021766404",
      title: "Phone",
    },
    {
      id:1,
      price:28000,
      name:"iphone 13",
      image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-green-select?wid=940&hei=1112&fmt=png-alpha&.v=1644969385505",
      title: "Phone",
    },
    {
      id:1,
      price:9000,
      name:"iphone Xs",
      image:"https://productimages.hepsiburada.net/s/31/1500/10352777822258.jpg",
      title: "Phone",
    }
  ])
  return (
    <div className="App">
      <header className="Items">
        {cardList.map((List,index) =>{
          return(
            <Card key={index} title={List.title} image={List.image} info={List.name} price={List.price} />
          )
        })}

      </header>
    </div>
  );
}

export default App;
