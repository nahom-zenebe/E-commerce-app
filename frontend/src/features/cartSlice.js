import { createSlice } from '@reduxjs/toolkit';



const initialState={
    items:[],
    totalAmount:0,
}


const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(state,action)=>{
            const newItem=action.payload
            const existingItem=state.items.find(item=> item.id===newItem.id)

            if( existingItem){
                existingItem.quntaity+=1
            }
            else{
                state.items.push({...newItem,quntaity:1})
            }
            state.totalAmount+=newItem.price
        },
        removeItem:(state,action)=>{
            const id=action.payload
            const existingItem=state.items.find(item=>item.id===id)
            
            if(existingItem){
                state.totalAmount-=existingItem.price *existingItem.quntaity
                 state.items=state.items.find(item=>item.id===id)


            }
        },
        incrementItem:(state,action)=>{
            const id=action.payload
            const existingItem=state.items.find(item=>item.id===id)

            if(existingItem){
                existingItem.quntaity+=1
                state.totalAmount+=existingItem



            }
        },
        decrementItem:(state,action)=>{
            const id=action.payload
            const existingItem=state.items.find(item=>item.id===id)


            if(existingItem && existingItem >1){
                existingItem.quntaity-=1
                state.totalAmount-=existingItem.price
            }
        }

    }
})

export const { addItem, removeItem, incrementItem, decrementItem } = cartSlice.actions;

export default cartSlice.reducer;