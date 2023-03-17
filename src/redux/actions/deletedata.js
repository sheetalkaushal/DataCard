import { removeUser } from "../slices/UserSlices";
import { store } from "../store";
const {dispatch} =store
export const remove=(data)=>{
    dispatch(removeUser(data)
    )
}