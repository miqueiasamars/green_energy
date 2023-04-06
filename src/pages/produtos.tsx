
import { NextPage } from "next";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Layout from "../components/template/dashboard/Layout";
import { Context } from "../data/contexts/Context";
import { IconRodaMecanicaP1, IconRodaMecanicaP2 } from "../components/icons";


const Produtos: NextPage = () => {

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
        menu: '3',        
        }
    });
},[dispatch])

  return (
    <div className={`bg-[#ffffff] text-black`}>
    <Layout>
   
      <div className="flex justify-center items-center bg-center shadow-md shadow-[#3A881B]/40" style={{ backgroundImage: 'url(/greenenergy_pellets.png)', height:300 }}>
             <div className="text-white text-6xl font-bold pt-4">PRODUTOS</div>
      </div>

      <div className="flex justify-center items-center py-10">
      <div>
        <div className="flex justify-center">
          <div className="text-[#3A881B]"><p className="animate-spin">{IconRodaMecanicaP1}</p></div>
          <div className="text-[#3A881B]"><p className="animate-spin">{IconRodaMecanicaP2}</p></div>
        </div>
        <div className="font-bold text-[#3A881B] text-xl text-center pt-4">PÁGINA EM CONSTRUÇÃO</div>
        <div className="font-bold text-[#3A881B] text-xl text-center pt-4">Green Energy LTDA</div>
      </div>
      </div>
    
    </Layout>
    </div>
  )
};

export default Produtos;