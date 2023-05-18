
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
        <div className="pt-10">
        <div>
        <img     
          src={'/greenenergy_sobre_04.png'}
          alt={'teste'}
          className="w-full"     
          /> 
          </div>
        </div>
        :
        <div className="">
        <div>
        <img     
          src={'/greenenergy_produto_03.png'}
          alt={'teste'}
          className="w-full"     
          /> 
          </div>
        </div>
        }
         <div className="px-10 md:px-20 pb-10 pt-10">
            <h2 className="text-3xl text-[#3A881B]">Como podem ser utilizados </h2>
            <br/>
            <p className='text-justify text-[#34220D]'>A primeira vantagem envolve a matéria-prima, que apresenta uma grande disponibilidade e versatilidade. A matéria-prima para a produção de pellets é proveniente de resíduos que seriam descartamos na natureza, este fator contribui significativamente para a redução do risco de incêndios. O uso de resíduos florestais e também dos desperdícios provenientes da indústria da madeira, permite a obtenção do produto final com um menor custo. Para produzir o pellet, além dos descartes das indústrias madeireiras, diversos tipos de biomassa vegetal são utilizados, como por exemplo cascas e podas de árvores, serragem, maravalhas, palhas de cereais, bagaço da cana-de-açúcar e o bambu.   
            <br/> A principal fonte de matéria-prima vem da atividade florestal, o que é muito importante ecologicamente e ajuda na economia também, já que valoriza os subprodutos de baixo valor que até há pouco tempo eram desprezados, mas que produzem um biocombustível de excelente qualidade por ter baixo teor de cinza. Após serem recolhidos, esses materiais são triturados e depois secos, para posteriormente serem transformados em pó e comprimidos para se obter a forma final. O resultado é um composto 100% natural e de elevado poder calorífico.</p>
         </div>       

        <div>
        </div>
      </div>    
    </Layout>

    </div>
  )
};

export default Produtos;