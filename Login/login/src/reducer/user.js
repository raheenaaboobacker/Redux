import { createSlice } from "@reduxjs/toolkit";
const initialStateValue={name:"",age:"",email:""}
const userSlice=createSlice({
    name:"user",   //state name
initialState:{
    // value:{name:"raheena",age:"24",email:"raheeena@gmail.com"}
    value:initialStateValue
},
reducers:{
    login:(state,action)=>{
        state.value=action.payload;
    },
logout:(state)=>{
    state.value=initialStateValue
}
}
})
export const {login}=userSlice.actions
export const {logout}=userSlice.actions
export default userSlice.reducer