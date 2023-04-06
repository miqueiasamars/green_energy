
import { NextPage } from "next";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Layout from "../../components/template/dashboard/Layout";
import { Context } from "../../data/contexts/Context";
import { IconRodaMecanicaP1, IconRodaMecanicaP2 } from "../../components/icons";
import router from "next/router";


const Loja: NextPage = () => {

const {state, dispatch} = useContext(Context)

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

useEffect(()=>{
  dispatch({
    type: 'MENU',
    payload: {
        menu: '2',        
        }
    });
},[dispatch])

  return (
    <div className={`bg-[#ffffff] text-black`}>
       
      {/* <div className="flex justify-center items-center bg-center shadow-md shadow-[#3A881B]/40" style={{ backgroundImage: 'url(/greenenergy_pellets4.gif)', height:300 }}>
             <div className="text-white text-6xl font-bold pt-4">Loja</div>
      </div> */}

      {/* <div className="flex justify-center items-center py-10 h-screen">
      <div>
        <div className="flex justify-center">
          <div className="text-[#3A881B]"><p className="animate-spin">{IconRodaMecanicaP1}</p></div>
          <div className="text-[#3A881B]"><p className="animate-spin">{IconRodaMecanicaP2}</p></div>
        </div>
        <div className="font-bold text-[#3A881B] text-xl text-center pt-4">PÁGINA EM CONSTRUÇÃO</div>
        <div className="font-bold text-[#3A881B] text-xl text-center pt-4">Green Energy LTDA</div>

        <div className="flex justify-center pt-4"><button onClick={()=>router.push("/")} className={`shadow-sm text-[#3A881B] border border-[#3A881B] hover:border-[#67ff2b] rounded-md px-10 py-1 text-2xl font-semibold mt-6`}>VOLTAR</button></div>
      </div>
      </div> */}

<div className="">
  <div className="background"></div>
  <div className="content">
    <h1>Seu texto aqui</h1>
  </div>
</div>  

    </div>
  )
};

export default Loja;