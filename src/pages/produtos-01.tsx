
import { NextPage } from "next";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import Layout from "../components/template/dashboard/Layout";
import { Context } from "../data/contexts/Context";



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
    <div className={`bg-[#ffffff] text-[#34220D]`}>
    <Layout>    

      <div className="text-xl md:text-2xl font-semibold text-[#727272]">

      {tela<900?
      <div className=''>
        <div className="">
        <img     
        src={'/greenenergy_center_02.png'}
        alt={'pellets'}
        className="w-full"
        /> 
        </div>
      </div>
      :
      <div className=''>
        <div className="">
        <img     
        src={'/greenenergy_produto_01.png'}
        alt={'pellets'}
        className="w-full"
        /> 
        </div>
      </div>      
      }

        <div className="pt-10 pb-10">
        <div className=" col-span-1 order-2 md:order-first">
          <div className="px-10 md:px-20">
          <h2 className="text-3xl text-[#3A881B]">O que são pellets </h2>
          <br/>
          <p className= 'flex justify-center  text-justify  text-[#34220D]'>Os pellets são formados por resíduos de madeira prensados em formato cilíndrico, que possuem entre 6 e 8 milímetros de diâmetro e entre 10 a 40 milímetros de comprimento. Durante o processo de produção, a matéria-prima é desidratada antes de ser comprimida, o que dá origem a um produto de grande poder calorífico e altamente eficiente. O pellet (granulado de madeira) é uma fonte de energia sustentável, feito a partir da matéria prima proveniente do descarte de produtos, como a madeira 100% de reflorestamento sem o uso de aditivos ou produtos químicos.</p>
          </div>
        </div>
        
        </div>      
        
      </div>    
    </Layout>

    </div>
  )
};

export default Produtos;