import { createSlice } from '@reduxjs/toolkit'

export const authSlice=createSlice({
    name:'auth',
    initialState:{
        isAuthenticated:false,
        isAdmin:false
        
    },
    reducers:{
       
        LOGIN_SUCCESS:(state)=>{
            state.isAuthenticated=true
            localStorage.setItem("login","truee")
          
            
        },
        LOGIN_FAIL:(state)=>{
            state.isAuthenticated=false
            localStorage.removeItem('user');
         
        },
        ADMIN_LOGIN:(state)=>{
            state.isAdmin=true
            localStorage.setItem("ADMIN","TRUE")
        }
    }

})
export const {LOGIN_FAIL,LOGIN_SUCCESS,ADMIN_LOGIN}=authSlice.actions;
export default authSlice.reducer;