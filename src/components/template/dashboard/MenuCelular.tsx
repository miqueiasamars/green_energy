// import MenuItem from './MenuItem'
import { IconBox, IconGear, IconBell, IconSair, IconBot, IconHomeCadeado, IconFinanceiro, IconAssinatura, IconUsers, IconHome, Icontelephone } from '../../icons'
import { useContext, useEffect, useState } from 'react'
import router from 'next/router'
import AvatarUsuario from './AvatarUsuario'
import { Context } from '../../../data/contexts/Context'

function MenuCelular () { 

const {state, dispatch} = useContext(Context)

const statusmenu = state.dados.menu

const [tela, setTela] = useState<number>(0)
const [status, setStatus] = useState(false)
const [drawer, setDrawer] = useState('0')

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
{tela <= 900&&
    <aside className={`bg-[#373837]/50 backdrop-blur-sm minha-div shadow-lg fixed bottom-0 top-0 w-full px-5 ${status?'h-ful':'h-16'}`}> 

          {!status&&<div className='flex justify-end'>
            <button
            className='text-white mt-4' onClick={()=>setStatus(true)}> 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            </button>            
          </div> }   

    {status&&
    <div className=''>  
    <div className="fixed inset-0">            
      
    {/* //////////////////////////////////////////////////////// */}

    <div className='bg-[#fff]/60 h-screen slide-in-text w-5/6 backdrop-blur-sm border-r-2'>

    <div onClick={()=>setStatus(false)} className="flex justify-end px-4 py-4"><a className='border border-[#fff] rounded-md px-2 font-semibold text-2xl text-white'>X</a></div>   
        
        <div className='flex flex-col items-center justify-center pt-8'>
        {/* <img
         width={150}
         height={150}
         src={'/logo_llconstrutora.png'}
         alt="Avatar do Usuário"
         className={``}/> */}
         <div className='text-4xl font-bold text-[#67ff2b]'>LOGO MARCA</div>
        </div>

        <div className='pt-10 text-xl font-semibold px-4'> 
            {/*  Produtos de produtores  */}
            {
            <div onClick={menu1} className={`px-5 py-3 cursor-pointer ${statusmenu  === '1'?'text-[#49db0f]':'text-[#fff]'} hover:text-[#49db0f]`}>
            <div className={``}>
                <p>Home</p>
            </div>
            </div>
            } 
             {/*  Produtos de produtores  */}
             {
            <div onClick={menu2} className={`px-5 py-3 cursor-pointer ${statusmenu  === '2'?'text-[#49db0f]':'text-[#fff]'} hover:text-[#49db0f]`}>
            <div className={``}>
                <p>Sobre</p>
            </div>
            </div>
            } 
             {/*  Produtos de produtores  */}
             {
            <div onClick={menu3} className={`px-5 py-3 cursor-pointer ${statusmenu  === '3'?'text-[#49db0f]':'text-[#fff]'} hover:text-[#49db0f]`}>
            <div className={``}>
                <p>Produtos</p>
            </div>
            </div>
            } 
             {/*  Produtos de produtores  */}
             {
            <div onClick={menu4} className={`px-5 py-3 cursor-pointer ${statusmenu  === '4'?'text-[#49db0f]':'text-[#fff]'} hover:text-[#49db0f]`}>
            <div className={` transition ease-in-out delay-150  hover:translate-z-4 hover:scale-125 duration-200`}>
                <p>Loja</p>
            </div>
            </div>
            } 
             {/*  Produtos de produtores  */}
             {
            <div onClick={menu5} className={`px-5 py-3 cursor-pointer ${statusmenu  === '5'?'text-[#49db0f]':'text-[#fff]'} hover:text-[#49db0f]`}>
            <div className={` transition ease-in-out delay-150  hover:translate-z-4 hover:scale-125 duration-200`}>
                <p>Contato</p>
            </div>
            </div>
            } 
             {/*  Produtos de produtores  */}
             {
            <div className='px-4 pt-4'>
            <div onClick={menu6} className={`border rounded-md border-[] px-4 py-3 cursor-pointer ${statusmenu  === '6'?'border-[#49db0f] text-[#49db0f]':'text-[#fff]'} hover:border-[#49db0f] hover:text-[#49db0f]`}>
            <div className={`text-center`}>
                <p>Orçamento</p>
            </div>
            </div>
            </div>
            }                 
                  
        </div>        
    </div>

    </div>

  
   
    </div>
    }
    </aside> 
}
</>
)

}

export default MenuCelular