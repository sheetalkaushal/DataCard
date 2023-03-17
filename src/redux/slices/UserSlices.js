import { createSlice } from "@reduxjs/toolkit";
const UserSlices = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    removeUser:(state, action) => {
        state.splice(action.payload,1)
    }
  }
});
export const { addUser, removeUser } = UserSlices.actions;
export default UserSlices;
