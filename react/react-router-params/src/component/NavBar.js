import {NavLink} from 'react-router-dom'
import Router from "../router/Router"
const NavBar = ()=> {

    return (

        <div className="App">
        <NavLink to="/Anasayfa" style={(params)=>{ return params.isActive ? {backgroundColor:"red"}: undefined}}>Anasayfaya</NavLink><br/>
        <NavLink to="/kullanici" style={(params)=>{ return params.isActive ? {backgroundColor:"red"}: undefined}}> Kullanıcı sayfasına </NavLink><br/>
        <NavLink to="/parameter/za" style={(params)=>{ return params.isActive ? {backgroundColor:"red"}: undefined}}> Parametre</NavLink><br/>
        <NavLink to="/queryparameter?a5_max=2020&address_region=2&price_min=10000&address_town=441&address_town=442&address_town=448" style={(params)=>{ return params.isActive ? {backgroundColor:"red"}: undefined}}>Query parameter</NavLink><br/>
        <NavLink to="/haberler" style={(params)=>{ return params.isActive ? {backgroundColor:"red"}: undefined}}>Haberler</NavLink><br/>
        <NavLink to="/haberler/sporhaberleri" style={(params)=>{ return params.isActive ? {backgroundColor:"red"}: undefined}}>Spor haberleri</NavLink><br/><br/>
        <Router />    
        </div>

    )

}

export default NavBar