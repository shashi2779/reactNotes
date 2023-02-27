// store :=> 
// state ko store kar ke rakhata hai.
// BookReducer "state" contain kar rha hai - BookReducer.js me
// ==========================================================================



// createStore ek parameter le rha "Reducer" , toh import krr k parameter pass krr diya
import BookReducer from "./BookReducer";
import { createStore } from "redux";



const store = createStore(BookReducer);

export default store;

