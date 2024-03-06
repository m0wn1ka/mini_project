import { createSlice } from '@reduxjs/toolkit'
// const isProduction = process.env.NODE_ENV === 'production';
// const baseURL = isProduction
//   ? "https://mini-project-backend-xnqj.onrender.com/"
//   : "http://localhost:3001/";
export const authSlice=createSlice({
    name:'auth',
    initialState:{
        isAuthenticated:false,
        isAdmin:false,
        url:"https://mini-project-backend-xnqj.onrender.com/"
        // url:"http://localhost:3001/"
        
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