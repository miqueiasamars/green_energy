
import { NextPage } from "next";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import Layout from "../components/template/dashboard/Layout";
import { Context } from "../data/contexts/Context";



const Produtos: NextPage = () => {

const {state, dispatch} = useContext(Context)

const status = state.dados.status

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
    <div className={`bg-[#ffffff] text-[#34220D]`}>
    <Layout>    

      <div className="text-xl md:text-2xl font-semibold text-[#727272]">

        <div className=''>
          {tela<900?
          <div>
          <img     
          src={'/greenenergy_sobre_02.png'}
          alt={'pellets'}
          className="w-full"     
          /> 
          </div>
          :
          <div>
          <img     
          src={'/greenenergy_produto_02.png'}
          alt={'pellets'}
          className="w-full"     
          /> 
          </div>
          }
          </div> 
        <div className="pt-10">

          {status==='1'?<div className="px-10 md:px-20 pb-10">
            <h2 className="text-2xl font-semibold text-[#3A881B]">Como podem ser utilizados:</h2>
            <br/>
          <p className='flex justify-center items-center text-justify text-[#34220D]'>Os pellets são utilizados como geradores de calor, energia e solução higiênica para animais. Podendo ser utilizados para o aquecimento e geração de energia em equipamentos como salamandras, caldeiras, lareiras, trocadores de calor, fornos entre outros. Os pellets de madeira não produzem fumaça e resultam em poucos resíduos após a queima, com cinzas em torno de 0,7%. São muito utilizados em países europeus e norte-americanos para o aquecimento residencial e apresentam crescente uso no Brasil como fonte energética alternativa aos combustíveis fósseis.</p>
          </div>
          :
          <div className="px-10 md:px-20 pb-10">
            <h2 className="text-2xl font-semibold text-[#3A881B]">How they can be used:</h2>
            <br/>
          <p className='flex justify-center items-center text-justify text-[#34220D]'>The pellets are used as generators of heat, energy and hygienic solution for animals. They can be used for heating and energy generation in equipment such as salamanders, boilers, fireplaces, heat exchangers, ovens, among others. Wood pellets do not produce smoke and result in little residue after burning, with ash around 0.7%. They are widely used in European and North American countries for residential heating and are increasingly used in Brazil as an alternative energy source to fossil fuels.</p>
          </div>}

          </div>                 
             
      </div>    
    </Layout>

    </div>
  )
};

export default Produtos;