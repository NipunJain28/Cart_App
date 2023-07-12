import {createSlice} from "@reduxjs/toolkit"
import CartItem from "../../components/CartItem";

const cartSlice=createSlice({
    name:"cartItems",
    initialState:[],
    reducers:{
        addToCart(state,action){
            const newItem=action.payload;
                state.push(
                    newItem
                );
                
        },
        deleteFromCart(state,action){
              return state.filter((d)=>d.id!==action.payload);
        },
        
    }
    
});
export default cartSlice.reducer;


export const {addToCart,deleteFromCart}=cartSlice.actions;