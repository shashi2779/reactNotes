import {buy_Book} from './BookTypes'

//jo hamari application ka state hota hai , wah hamesha ek single object k ander hota hai.
const initialState = {
    NumberOfBooks : 20
}


const BookReducer = (state = initialState , action) =>{
     switch(action.type){
        case buy_Book: return{
            ...state,
            NumberOfBooks:state.initialState-1
        }
        default : return state
     }

}

export default BookReducer;