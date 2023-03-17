import { addUser } from "../slices/UserSlices";
import { store } from "../store";
const {dispatch} =store
export const  senddata=(data)=>{
    dispatch(addUser(data)
    )
}