import { createSlice } from "@reduxjs/toolkit"
const defaultLocale = localStorage.getItem("locale") ? localStorage.getItem("locale") : navigator.language

export const rootLang = createSlice({
    name:"rootLang",
    initialState:{
        value:defaultLocale
    },
    reducers:{
        langchangeEN: state => {
            state.value = "en-US"
            localStorage.setItem("locale",state.value)
        },
        langchangeTR: state => {
            state.value = "tr-TR" 
            localStorage.setItem("locale",state.value)
        }
    }
})

export const {langchangeEN, langchangeTR} = rootLang.actions

export default rootLang.reducer