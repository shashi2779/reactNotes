// Action :

import {buyBook} from './BookTypes'

//action ko create kar liye with the help of "action creator"
//return kiya "action" ko 

const purchase_book = ()=>{
    
    return{
        //string value se const value m change krr liye import krr k [bookTypes se]
        type: buyBook   
    }
}