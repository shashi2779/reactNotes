// replace createStore [redux] to configureStore [redux toolkit]
import { configureStore } from '@reduxjs/toolkit'
import { customReducer } from './Reducer'

 const store = configureStore({
    // multiple reducer pass karne ke liye "combineReducers" jo use karte the redux me ,
    // wha redux toolkit me "reducer" likh k kayi reducer pass karr sakte hai
    // eg. ballReducer , batReducer , userReducer
    reducer:{
       custom:customReducer
    }
})


export default store