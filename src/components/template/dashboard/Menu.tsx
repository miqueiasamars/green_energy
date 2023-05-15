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
const [status, setStatus] = useState(false)

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

const brasil = () =>{
  return(
      <div>
      <img                
        src={"/greenenergy_brasil.png"}         
        alt="Produtos-copps"
        className={`cursor-pointer w-6`}
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
      />
      </div>
  )
}


return (
<> 
{tela >= 768&&
<div className='minha-div'> 
    
    <div className='flex'>
    <div className='h-12 bg-[#e5e4e4]/50 w-screen flex justify-end px-20 items-center gap-3'>Você está no {brasil()} ou {usa()}</div>
    </div>

    <nav className="fixed  w-full flex items-center justify-between px-5 py-3 backdrop-blur-sm bg-[#ffffff]/50">

      <div className="flex items-center flex-shrink-0 px-24">
        <img src="/logo.png" alt="Logo" className="h-16"/>
      </div>

      <div className=" flex justify-end items-center">

        <div className="text-sm mr-10 gap-8 flex justify-center items-center">
          <div className='flex justify-center'>  

          <button onClick={menu1} className=" pl-5 text-lg transition font-semibold ease-in-out delay-150 hover:scale-125 duration-75 text-center text-white bg-[#3A881B] rounded-md px-6 py-1">
              Home
            </button>
           </div>
            <button onClick={menu2} className="text-lg transition font-semibold ease-in-out delay-150 hover:scale-125 duration-75 text-white bg-[#3A881B] rounded-md px-6 py-1">
              Sobre
            </button>

            {/* <button onClick={menu3} className="text-lg transition font-semibold ease-in-out delay-150 hover:scale-125 duration-75 text-white bg-[#3A881B] rounded-md px-6 py-1">
              Produtos
            </button> */}


            <button onClick={menu5} className="text-lg transition font-semibold ease-in-out delay-150 hover:scale-125 duration-75 text-[#3A881B] bg-white rounded-md px-6 py-1 border border-[#3A881B]">
              Contato
            </button>

        </div>

    </div>
    </nav>
</div>
}
</>
)

}

export default Menu