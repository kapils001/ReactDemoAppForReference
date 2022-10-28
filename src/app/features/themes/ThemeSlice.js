import { createSlice } from "@reduxjs/toolkit";

const intialStateValue ={
    color :"",
}

export const themeSlice = createSlice({
    name:'theme',
    initialState: intialStateValue,
    reducers:{
       changeTextColor: (state, action) =>{
        state.color = action.payload;
       }
    }
})

export const {changeTextColor} = themeSlice.actions;
export default themeSlice.reducer;
