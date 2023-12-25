import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    
    name : "cart",
    initialState : {
        items : [],
    },
    reducers : {
        addItem : (state,action) => {
            //mutating the state directly here
        //in vanilla redux we are getting a warnimg that DON'T mutate state ,,returning is mandatory
        // we arte acheveing it by making new state
        //new_state = {...state}
        // new_state.items.push(action.payload);
        //return new_state
        // We have to mutate the state in latest redux toolkit
            state.items.push(action.payload);
        },
       

        removeItem : (state) => {
            state.items.pop();
        },
        clearCart : (state) => {
            state.items.length = 0;
        }
    }
    
    }
    
    
);

export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;