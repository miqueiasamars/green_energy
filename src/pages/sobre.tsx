
import { NextPage } from "next";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import Layout from "../components/template/dashboard/Layout";
import { Context } from "../data/contexts/Context";


const Sobre: NextPage = () => {

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
    <div className={`bg-[#ffffff] text-[#494949]`}>
    <Layout>
   
      <div className="mt-20 sm:mt-0 ">
        <img className="shadow-md shadow-[#3A881B]/40" alt="" src="/greenenergy_pellets_carrosel_08_md.png"  />
      </div>      

      <div className="px-10 md:px-40 py-10 ge_container">
        <h2 className={`text-2xl font-bold text-[#3A881B] pt-10 `}>QUEM SOMOS:</h2>
        <h3>
          <p className="text-xl font-semibold pt-6">A Green Energy é uma empresa Brasileira, voltada para a produção de energia renovável. Nos produzimos o que a de melhor em biomassa de pellets, utilizando matéria prima proveniente da serragem de madeira sem prejudicar o meio ambiente, garantindo o padrão e a qualidade de nossos produtos.</p>
          <p className="text-xl font-semibold pt-6">Acompanhando as tendências do mercado e desenvolvendo produtos sustentáveis a Green Energy investe no aperfeiçoamento das suas tecnologias de produção, com o objetivo de encontrar a união perfeita entre esses recursos. Todos os nossos produtos são adequados à norma ENPlus A1.</p>
        </h3>

        <h2 className={`text-2xl font-bold text-[#3A881B] pt-10 `}>MISSÃO:</h2>
        <h3>
          <p className={`text-xl font-semibold pt-6 `}>Temos como missão oferecer aos nossos clientes o mais alto padrão de qualidade em biomassa de pellets, para o mercado interno e externo. A Green Energy tem como objetivo principal a sustentabilidade. Buscando harmonizar o desenvolvimento econômico e a conservação ambiental.</p>
        </h3>

        <h2 className={`text-2xl font-bold text-[#3A881B] pt-10 `}>VALORES:</h2>
        <h3>
          <p className={`text-xl font-semibold pt-6 `}>Nossa empresa preza pelo desenvolvimento de produtos provenientes de matérias primas que não prejudiquem o meio ambiente. Portamos em nossa bandeira valores inegociáveis, como a preservação da natureza, o respeito aos seres humanos e aos animais.</p>
        </h3>
      </div>
    
    </Layout>
    </div>
  )
};

export default Sobre;

