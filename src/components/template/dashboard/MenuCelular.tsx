// import MenuItem from './MenuItem'
import { IconBox, IconGear, IconBell, IconSair, IconBot, IconHomeCadeado, IconFinanceiro, IconAssinatura, IconUsers, IconHome, Icontelephone } from '../../icons'
import { useContext, useEffect, useState } from 'react'
import router from 'next/router'
import AvatarUsuario from './AvatarUsuario'
import { Context } from '../../../data/contexts/Context'

function MenuCelular () { 

const {state, dispatch} = useContext(Context)

const statusLingua = state.dados.status

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

const setStatus1 = () =>{
    dispatch({
        type: 'STATUS',
        payload: {
        status: '1',
        } 
        });
  }
  const setStatus2 = () =>{
     dispatch({
         type: 'STATUS',
         payload: {
         status: '2',
         } 
         });
   }
  
  const brasil = () =>{
    return(
        <div>
        <img                
          src={"/greenenergy_brasil.png"}         
          alt="Produtos-copps"
          className={`cursor-pointer w-6`}
          onClick={setStatus1}
        />
        </div>
    )
  }
  
  const usa = () =>{
    return(
        <div>
        <img                
          src={"/greenenergy_usa.png"}         
          alt="Produtos-copps"
          className={`cursor-pointer w-6`}
          onClick={setStatus2}
        />
        </div>
    )
  }

return (
<> 
{tela <= 900&&
    
    <aside className={`bg-[#fff]/50 backdrop-blur-sm minha-div shadow-lg fixed bottom-0 top-0 w-full ${status?'h-ful':'h-20'}`}> 
                   
          {!status&&
          <div>
          {statusLingua==='1'?<div className='h-8 bg-[#e5e4e4]/50 flex justify-end px-8 items-center gap-3'>Você está no {brasil()} ou {usa()}</div>:
          <div className='h-8 bg-[#e5e4e4]/50 flex justify-end px-8 items-center gap-3'>Are you in {brasil()} or {usa()}</div>}
          <div className='flex justify-between pt-2 px-5'>
          <div className='font-bold text-xl text-[#5A4B3C]'></div>
          <div className=''>
            <button
            className='text-[#3A881B]' onClick={()=>setStatus(true)}> 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            </button>            
          </div>
          </div>
          </div>
           }   

    {status&&

    <div className=''>  
    <div className="fixed inset-0">            
      
    {/* //////////////////////////////////////////////////////// */}

    <div className='bg-[#fff]/60 h-screen slide-in-text-menu w-5/6 backdrop-blur-sm border-r-2'>

    <div onClick={()=>setStatus(false)} className="flex justify-end px-4 py-4"><a className='border border-[#3A881B] rounded-md px-2 font-semibold text-2xl text-[#3A881B]'>X</a></div>   
        
        <div className='flex flex-col items-center justify-center pt-8'>
        <img
         width={200}
         height={200}
         src={'/logomarca.png'}
         alt="Logo Marca"
         className={``}/>
        </div>

        <div className='pt-10 text-xl font-semibold px-4'> 
            {/*  Produtos de produtores  */}
            {
        <div>
            <div onClick={menu1} className={`px-5 py-3 cursor-pointer ${statusmenu  === '1'?'text-[#3A881B]':'text-[#3A881B]'} hover:text-[#9d9d9d]`}>
            {statusLingua==='1'?<div className={``}>
                <p>Início</p>
            </div>:
            <div className={``}>
                <p>Home</p>
            </div>}
            </div>

            <div onClick={menu2} className={`px-5 py-3 cursor-pointer ${statusmenu  === '1'?'text-[#3A881B]':'text-[#3A881B]'} hover:text-[#9d9d9d]`}>
            {statusLingua==='1'?<div className={``}>
                <p>Sobre</p>
            </div>:
            <div className={``}>
                <p>About</p>
            </div>}
            </div>

            {/* <div onClick={menu3} className={`px-5 py-3 cursor-pointer ${statusmenu  === '1'?'text-[#3A881B]':'text-[#3A881B]'} hover:text-[#9d9d9d]`}>
            <div className={``}>
                <p>Produtos</p>
            </div>
            </div> */}

            <div onClick={menu5} className={`px-5 py-3 cursor-pointer ${statusmenu  === '1'?'text-[#3A881B]':'text-[#3A881B]'} hover:text-[#9d9d9d]`}>
            {statusLingua==='1'?
            <div className={``}>
                <p>Contato</p>
            </div>:
            <div className={``}>
                <p>Contact</p>
            </div>}
            </div>
        </div>
            } 
             {/*  Produtos de produtores  */}
             {
            // <div onClick={menu2} className={`px-5 py-3 cursor-pointer ${statusmenu  === '2'?'text-[#67ff2b]':'text-[#fff]'} hover:text-[#67ff2b]`}>
            // <div className={``}>
            //     <p>Sobre</p>
            // </div>
            // </div>
            } 
             {/*  Produtos de produtores  */}
             {
            // <div onClick={menu3} className={`px-5 py-3 cursor-pointer ${statusmenu  === '3'?'text-[#67ff2b]':'text-[#fff]'} hover:text-[#67ff2b]`}>
            // <div className={``}>
            //     <p>Produtos</p>
            // </div>
            // </div>
            } 
             {/*  Produtos de produtores  */}
             {
            // <div onClick={menu4} className={`px-5 py-3 cursor-pointer ${statusmenu  === '4'?'text-[#67ff2b]':'text-[#fff]'} hover:text-[#67ff2b]`}>
            // <div className={` `}>
            //     <p>Loja</p>
            // </div>
            // </div>
            } 
             {/*  Produtos de produtores  */}
             {
            // <div onClick={menu5} className={`px-5 py-3 cursor-pointer ${statusmenu  === '5'?'text-[#67ff2b]':'text-[#fff]'} hover:text-[#67ff2b]`}>
            // <div className={``}>
            //     <p>Contato</p>
            // </div>
            // </div>
            } 
             {/*  Produtos de produtores  */}
             {
            // <div className='px-4 pt-4'>
            // <div onClick={menu6} className={`border rounded-md border-[] px-4 py-3 cursor-pointer ${statusmenu  === '6'?'border-[#67ff2b] text-[#67ff2b]':'text-[#fff]'} hover:border-[#67ff2b] hover:text-[#67ff2b]`}>
            // <div className={`text-center`}>
            //     <p>Orçamento</p>
            // </div>
            // </div>
            // </div>
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