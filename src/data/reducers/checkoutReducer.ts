import { reducerActionType } from "../types/reducerActinTypes";

export type checkoutType = { 
    id: string,     		
    id_produto: string,	        	
    id_vendedor: string,	        	
    nome_checkout: string,	    
    valor_adesao: string,	    
    valor_unico: string,	        	
    valor_mensal: string,	    	
    valor_trimestral: string,		
    valor_semestral: string,	    	
    valor_anual: string,	        
    cobrar_adesao: string,	    
    updated_at: string,	        	
    created_at: string,           
 
}

export const checkoutInitialState: checkoutType = {
    id: '',     		
    id_produto: '',	        	
    id_vendedor: '',	        	
    nome_checkout: '',	    
    valor_adesao: '',	    
    valor_unico: '',	        	
    valor_mensal: '',	    	
    valor_trimestral: '',		
    valor_semestral: '',	    	
    valor_anual: '',	        
    cobrar_adesao: '',	    
    updated_at: '',	        	
    created_at: '',     
}

export const checkoutReducer = (state: checkoutType, action: reducerActionType) => {

    switch(action.type){
        case 'CHECKOUT':   
        return {...state, 
            id: action.payload.id,
            id_produto: action.payload.id_produto,
            pixel_facebook: action.payload.pixel_facebook,
            pixel_google: action.payload.pixel_google,
            valor_anual: action.payload.valor_anual,
            valor_mensal: action.payload.valor_mensal,
            valor_semestral: action.payload.valor_semestral,
            valor_trimestral: action.payload.valor_trimestral,
            valor_unico: action.payload.valor_unico,
        };                                     
        break;                 
    }

    return state;
   
}