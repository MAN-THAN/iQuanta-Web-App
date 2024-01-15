import { createSlice } from "@reduxjs/toolkit";


const groupSlice = createSlice({
    name:"groupData",
    initialState:{},
    reducers:{
      addGroupData(state,action){
        return { ...state, ...action.payload };
      }
    }
  })
  
export default groupSlice.reducer;

export const { addGroupData } = groupSlice.actions;
