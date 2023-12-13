import { useNavigate } from "react-router-dom"
const UserView =()=> {
    const navigate = useNavigate()
    return(
        <div>
            Burası Kullanıcı sayfası
            <button
            onClick={()=> {
                navigate('/')
            }}
            >Anasayfaya geri dön aga</button>
        </div>
    )
}

export default UserView