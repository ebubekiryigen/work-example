import { createContext, useContext, useReducer } from "react";
import {settingReducer} from "../reducer/";

export const Context = createContext()


const Provider = ({children}) => {

    const [state, dispatch] = useReducer(settingReducer, {
        theme:localStorage.getItem('theme') || 'light',
        language:localStorage.getItem('language') || navigator.language
    })

    const data = {
       ...state,
       dispatch
    }
  
    return(
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export const useSetting = () => useContext(Context)

export default Provider