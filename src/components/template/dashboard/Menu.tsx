// import MenuItem from './MenuItem'
import { IconBox, IconGear, IconBell, IconSair, IconBot, IconAssinatura, IconFinanceiro, IconUsers, IconHomeCadeado, IconHome, IconTelegram, Icontelephone } from '../../icons'
import { useContext, useEffect, useState } from 'react'
import router from 'next/router'
import AvatarUsuario from './AvatarUsuario'
import { Context } from '../../../data/contexts/Context'

function Menu () { 

const {state, dispatch} = useContext(Context)

const statusmenu = state.dados.menu

const [drawer, setDrawer] = useState('0')
const [tela, setTela] = useState(0);

try{
    window.addEventListener('resize', function () {
        const x = window.screen.width;
        const y = window.screen.height;          
        setTela(x)
    });
}catch (erro){ 
}

useEffect(()=>{
    const x = window.screen.width;
    const y = window.screen.height;
    setTela(x)
},[])

const menu1 = () =>{
     router.push("/")
    dispatch({
        type: 'MENU',
        payload: {
        menu: '1',
        } 
        });
}
const menu2 = () =>{
    router.push("/sobre")
    dispatch({
        type: 'MENU',
        payload: {
        menu: '2',
        } 
        });
}
const menu3 = () =>{
    router.push("/produtos")
    dispatch({
        type: 'MENU',
        payload: {
        menu: '3',
        } 
        });
}
const menu4 = () =>{
    router.push("/loja")
    dispatch({
        type: 'MENU',
        payload: {
        menu: '4',
        } 
        });
}
const menu5 = () =>{
    router.push("/contato")
    dispatch({
        type: 'MENU',
        payload: {
        menu: '5',
        } 
        });
}
const menu6 = () =>{
    router.push("/contato")
    dispatch({
        type: 'MENU',
        payload: {
        menu: '6',
        } 
        });
}

return (
<> 
{tela > 900&&
    <div className='bg-[#fff]/50 minha-div flex flex-row items-center backdrop-blur-sm font-roboto-400 fixed bottom-0 top-0 w-full h-20 text-white'>     

        <div className='basis-1/2'></div>
        
        <div className='flex basis-1/2'> 
            {/*  Produtos de produtores  */}
            {
            <div onClick={menu1} className={`px-5 py-3 cursor-pointer ${statusmenu  === '1'?'text-[#ffffff]':'text-[#fff]'} hover:text-[#808180]`}>
            <div className={` transition ease-in-out delay-150 hover:translate-z-4 hover:scale-125 duration-200`}>
                <p>Home</p>
            </div>
            </div>
            } 
             {/*  Produtos de produtores  */}
             {
            // <div onClick={menu2} className={`px-5 py-3 cursor-pointer ${statusmenu  === '2'?'text-[#67ff2b]':'text-[#fff]'} hover:text-[#67ff2b]`}>
            // <div className={` transition ease-in-out delay-150 hover:translate-z-4 hover:scale-125 duration-200`}>
            //     <p>Sobre</p>
            // </div>
            // </div>
            } 
             {/*  Produtos de produtores  */}
             {
            // <div onClick={menu3} className={`px-5 py-3 cursor-pointer ${statusmenu  === '3'?'text-[#67ff2b]':'text-[#fff]'} hover:text-[#67ff2b]`}>
            // <div className={` transition ease-in-out delay-150 hover:translate-z-4 hover:scale-125 duration-200`}>
            //     <p>Produtos</p>
            // </div>
            // </div>
            } 
             {/*  Produtos de produtores  */}
             {
            // <div onClick={menu4} className={`px-5 py-3 cursor-pointer ${statusmenu  === '4'?'text-[#67ff2b]':'text-[#fff]'} hover:text-[#67ff2b]`}>
            // <div className={` transition ease-in-out delay-150  hover:translate-z-4 hover:scale-125 duration-200`}>
            //     <p>Loja</p>
            // </div>
            // </div>
            } 
             {/*  Produtos de produtores  */}
             {
            // <div onClick={menu5} className={`px-5 py-3 cursor-pointer ${statusmenu  === '5'?'text-[#67ff2b]':'text-[#fff]'} hover:text-[#67ff2b]`}>
            // <div className={` transition ease-in-out delay-150  hover:translate-z-4 hover:scale-125 duration-200`}>
            //     <p>Contato</p>
            // </div>
            // </div>
            } 
             {/*  Produtos de produtores  */}
             {
            // <div onClick={menu6} className={`border rounded-md border-[] px-4 py-3 cursor-pointer ${statusmenu  === '6'?'border-[#67ff2b] text-[#67ff2b]':'text-[#fff]'} hover:border-[#67ff2b] hover:text-[#67ff2b]`}>
            // <div className={`transition ease-in-out delay-150 hover:translate-z-4 duration-200`}>
            //     <p>Orçamento</p>
            // </div>
            // </div>
            }               
                  
        </div> 

    </div> 
}
</>
)

}

export default Menu