import { useAuth } from "../context/"
import { useSetting } from "../context/"


const Header = () => {

    const data = useSetting()
    const {user, dispatch} = useAuth()

    return(
        <header className={data.theme === 'dark' && 'dark'}>
            <div>
                <span>Tema: {data.theme}  <button onClick={()=>data.dispatch({type:'TOGGLE_THEME'})}>Tema Değiş</button></span>
                <span>dil: {data.language} <button onClick={()=>data.dispatch({type:'TOGGLE_LANGUAGE'})}>Dil Değiş</button></span>
            </div>
            <div>
                <span><button onClick={()=>dispatch({type:'TOGGLE_USER'})}>{user ? 'çıkış yap' : "giriş yap "}</button></span>
            </div>
        </header>
    )
}

export default Header