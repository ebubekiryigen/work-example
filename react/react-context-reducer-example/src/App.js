import Footer from './components/Footer';
import Header from './components/Header';
import { useAuth } from './context/'


function App() {

  const {user} = useAuth()

  return (

      <>
        <Header />
                <div className="App">
                  {user && (
                    <div style={{padding:50,border:"1px solid blue"}}>
                      merhaba bu alan sadece user var iken gözükür
                    </div>
                  )}
                </div>
        <Footer />
      </>

  );
}

export default App;
