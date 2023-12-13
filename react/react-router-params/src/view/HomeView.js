import { useNavigate } from "react-router-dom"

const HomeView = ()=> {
    const navigate = useNavigate()
    return(
        <div>

            Burası Anasayfa
            <button 
            onClick={()=> {
                navigate('/kullanici')
            }}
            >
                Kullanıcı Sayfasına git
            </button>
        </div>
    )
}

export default HomeView