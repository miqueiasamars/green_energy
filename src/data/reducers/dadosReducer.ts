import { reducerActionType } from "../types/reducerActinTypes";

export type dadosType = {  
    // Método de pagamento
    menu: string,
    
}

export const dadosInitialState: dadosType = { 
    // Método de pagamento
    menu: '',
}

export const dadosReducer = (state: dadosType, action: reducerActionType) => {

    switch(action.type){        
        // Metodo de pagamento
        case 'MENU':   
        return {...state, 
            menu: action.payload.menu,
        };           
    }

    return state;
   
}