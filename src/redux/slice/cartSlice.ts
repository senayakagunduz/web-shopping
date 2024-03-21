import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Products{
    id:number,
    title:string,
    image:string,
    price:number,
    quantity:number,
}
const initialState:Array<Products>=[]

export const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action:PayloadAction<Products>)=>{
            if(state.findIndex((product)=>product.id===action.payload.id)===-1){
                state.push(action.payload)
            }else{
                return state.map((item)=>{
                    return item.id===action.payload.id ? {...item, quantity:item.quantity+1}:item
                })
            }
        },
        removeCart:(state,action:PayloadAction<number>)=>{
            const id=action.payload;
            return state.filter((item)=>item.id!==id)
        }
    }
})
export const {addToCart, removeCart}=cartSlice.actions;
export default cartSlice.reducer;