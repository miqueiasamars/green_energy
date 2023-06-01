import { reducerActionType } from "../types/reducerActinTypes";

export type dadosType = {  
    // Método de pagamento
    menu: string,
    status:string
    
}

export const dadosInitialState: dadosType = { 
    // Método de pagamento
    menu: '',
    status:'1',
}

export const dadosReducer = (state: dadosType, action: reducerActionType) => {

    switch(action.type){        
        // Metodo de pagamento
        case 'MENU':   
        return {...state, menu: action.payload.menu,
        }; 
        // Metodo de pagamento
        case 'STATUS':   
        return {...state, status: action.payload.status,
        };          
    }

    return state;
   
}