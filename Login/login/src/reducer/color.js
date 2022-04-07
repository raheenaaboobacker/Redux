import { createSlice } from "@reduxjs/toolkit";
const colorSlice=createSlice({
    name:"color",
    initialState:{
        value:{color:""}
        
    },
    reducers:{
        changecolor:(state,action)=>{
            state.value=action.payload
        }
    }
})
export const {changecolor}=colorSlice.actions
export default colorSlice.reducer