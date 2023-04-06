import { createContext, useReducer, useEffect } from "react";
import { reducerActionType } from "../../data/types/reducerActinTypes";
import { checkoutInitialState, checkoutReducer, checkoutType } from "../reducers/checkoutReducer";
import { dadosInitialState, dadosReducer, dadosType } from "../reducers/dadosReducer";
import { produtosInitialState, produtosReducer, produtosType } from "../reducers/produtosReducer";

interface Props {
    children: React.ReactNode;
}

type initialStateType = {
    [x: string]: any;  
    produtos: produtosType;
    checkout: checkoutType;   
    dados: dadosType;
}

type ContextType = {
    state: initialStateType;
    dispatch: React.Dispatch<any>;
}

const initialState = {   
    produtos: produtosInitialState,
    checkout: checkoutInitialState,
    dados: dadosInitialState,
  }

export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
});

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
    produtos: produtosReducer(state.produtos, action),
    checkout: checkoutReducer(state.checkout, action),
    dados: dadosReducer(state.dados, action),
})

export const ContextProvider: React.FC <Props> = ({ children }) => {
    
    const [state, dispatch] = useReducer(mainReducer, initialState);       

    return (
    <Context.Provider value={{state, dispatch}}>
        {children}
    </Context.Provider>
    )
}

