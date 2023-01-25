import { createContext, useContext, useReducer } from "react";
import Reducer from "./Reducer";

const StoreContext = createContext()
const initState = {Loading: false, universities: []}
const StoreProvider = ({children})=> {
    const [state, dispatch] = useReducer(Reducer, initState)
    return (
        <StoreContext.Provider value= {{state, dispatch}}>
            {children}
        </StoreContext.Provider>
    )
}
export const useStore = ()=> useContext(StoreContext)
export default StoreProvider;