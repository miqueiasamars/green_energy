import Menu from './Menu'
import Conteudo from './Conteudo'
import Head from 'next/head';
import { Rodape } from './Rodape';
import Cabecalho from './Cabecalho';
import MenuCelular from './MenuCelular';
import router from 'next/router';
import { IconWhatsApp } from '../../icons';

interface LayoutProps {
    children?: any
}

export default function Layout(props: LayoutProps) {    
    return (       
        <div className={`flex`}>            
            <Head>
            <title>Green Energy</title>          
         
            </Head>         
            
            <div className=''>
            <Menu />
            <MenuCelular/>
            </div>
          
            <div className='w-screen h-screen overflow-auto touch-auto'>                
            <Conteudo >           
            {props.children}
            </Conteudo>           
            <Rodape/>
            </div>
        </div>
       
    )
}