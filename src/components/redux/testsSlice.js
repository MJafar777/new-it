import { createSlice } from "@reduxjs/toolkit";

export const testSlice = createSlice({

  name: "test",
  initialState: {
    dataIndex: 11
   },
  reducers: {

    editDataIndex: (state, action ) => {
      state.dataIndex=action.payload
    }
  }
});

export const {
    editDataIndex,

} = testSlice.actions;

export default testSlice.reducer;
