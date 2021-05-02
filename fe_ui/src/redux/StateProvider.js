import {createContext,useContext,useReducer} from 'react';

const StateContext = createContext();

const StateContextProvider = ({ reducer, initialState, children })=>{
    return(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
    )
}

export const useStateValue = () => useContext(StateContext);

export default StateContextProvider;

