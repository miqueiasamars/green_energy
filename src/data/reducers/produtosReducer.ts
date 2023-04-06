import { reducerActionType } from "../types/reducerActinTypes";

export type produtosType = {     
    id: string,         	
    id_user: string, 	             
    id_telegram: string, 	         	
    user_telegram: string, 	     	
    nome_vendedor: string, 	     	
    contato_vendedor: string, 	 	
    codigo_produto: string,        	
    id_chat: string, 	             	
    tipo_grupo: string, 	         	
    categoria: string, 	         	
    titulo: string, 	             	
    subtitulo: string, 	         	
    link_permanente: string, 	     	
    url_img: string, 	             	
    pixel_facebook: string, 	     
    pixel_facebook_2: string, 	 	
    pixel_google: string,
    status_venda: string, 	     	
    banir: string, 	             
    updated_at: string, 	        			
    created_at: string, 
}

export const produtosInitialState: produtosType = {
    id: '',         	
    id_user: '', 	             
    id_telegram: '', 	         	
    user_telegram: '', 	     	
    nome_vendedor: '', 	     	
    contato_vendedor: '', 	 	
    codigo_produto: '',        	
    id_chat: '', 	             	
    tipo_grupo: '', 	         	
    categoria: '', 	         	
    titulo: '', 	             	
    subtitulo: '', 	         	
    link_permanente: '', 	     	
    url_img: '', 	             	
    pixel_facebook: '', 	     
    pixel_facebook_2: '', 	 	
    pixel_google: '', 
    status_venda: '',	     	
    banir: '', 	             
    updated_at: '', 	        			
    created_at: '',
}

export const produtosReducer = (state: produtosType, action: reducerActionType) => {
    switch(action.type){
        case 'PRODUTOS':   
        return {...state,
            id: action.payload.id,         	
            id_user: action.payload.id_user, 	             
            id_telegram: action.payload.id_telegram, 	         	
            user_telegram: action.payload.user_telegram, 	     	
            nome_vendedor: action.payload.nome_vendedor, 	     	
            contato_vendedor: action.payload.contato_vendedor, 	 	
            codigo_produto: action.payload.codigo_produto,        	
            id_chat: action.payload.id_chat, 	             	
            tipo_grupo: action.payload.tipo_grupo, 	         	
            categoria: action.payload.categoria, 	         	
            titulo: action.payload.titulo, 	             	
            subtitulo: action.payload.subtitulo, 	         	
            link_permanente: action.payload.link_permanente, 	     	
            url_img: action.payload.url_img, 	             	
            pixel_facebook: action.payload.pixel_facebook, 	     
            pixel_facebook_2: action.payload.pixel_facebook_2, 	 	
            pixel_google: action.payload.pixel_google, 
            status_venda: action.payload.tatus_venda,	     	
            banir: action.payload.banir, 	             
            updated_at: action.payload.updated_at, 	        			
            created_at: action.payload.created_at,
        };                       
    }

    return state;   
}