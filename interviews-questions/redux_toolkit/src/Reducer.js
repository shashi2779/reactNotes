import { createAction, createReducer } from '@reduxjs/toolkit'



// createReducer me do object aayegen
// let counterReducer = createReducer({},{})

let initialState  = {
    c:0
}

export const customReducer = createReducer(initialState,{
    // eske ander hamm multiple reducer de sakte hai
    // this is the action that will be called when the action is dispatched.

    increment : (state) =>{  // yha action na hi likho
        // state.c = state.c +1
           state.c += 1;
    },

    incrementByValue : (state,action)=>{ // user se value le rha ki kitne se badhana hai toh "action" use karegen
        // state.c += 1;
        state.c += action.payload
    },
    
    decrement : (state) =>{ 
        state.c -= 1;
    },
})