import { configureStore } from '@reduxjs/toolkit'
import  rootLang from './lang'


export default configureStore({
    reducer: {
        lang:rootLang
    },
})
