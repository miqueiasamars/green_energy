
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
      
        {tela<900?
        <div className="">
        <img     
          src={'/greenenergy_sobre_03.png'}
          alt={'teste'}
          className="w-full"
          /> 
        </div>
        :
        <div className="">
        <img     
          src={'/greenenergy_produto_04.png'}
          alt={'teste'}
          className="w-full"     
          /> 
        </div>
        }       

        <div className="px-10 md:px-20 pb-10 pt-10">          
          {status==='1'?<div className="col-span-1 order-2 md:order-first">
            <h2 className="text-2xl font-semibold text-[#3A881B]">Pellets x Vantagens econômicas e ecológicas:</h2>
            <br/>
            <p className='text-justify text-[#34220D]'>A primeira vantagem envolve a matéria-prima, que apresenta uma grande disponibilidade e versatilidade. A matéria-prima para a produção de pellets é proveniente de resíduos que seriam descartamos na natureza, este fator contribui significativamente para a redução do risco de incêndios. O uso de resíduos florestais e também dos desperdícios provenientes da indústria da madeira, permite a obtenção do produto final com um menor custo. Para produzir o pellet, além dos descartes das indústrias madeireiras, diversos tipos de biomassa vegetal são utilizados, como por exemplo cascas e podas de árvores, serragem, maravalhas, palhas de cereais, bagaço da cana-de-açúcar e o bambu.</p>
            <p className='text-justify text-[#34220D] pt-4'>A principal fonte de matéria-prima vem da atividade florestal, o que é muito importante ecologicamente e ajuda na economia também, já que valoriza os subprodutos de baixo valor que até há pouco tempo eram desprezados, mas que produzem um biocombustível de excelente qualidade por ter baixo teor de cinza. Após serem recolhidos, esses materiais são triturados e depois secos, para posteriormente serem transformados em pó e comprimidos para se obter a forma final. O resultado é um composto 100% natural e de elevado poder calorífico.</p>
          </div>  
          :
          <div className="col-span-1 order-2 md:order-first">
            <h2 className="text-2xl font-semibold text-[#3A881B]">Pellets x Economic and ecological advantages:</h2>
            <br/>
            <p className='text-justify text-[#34220D]'>The first advantage involves the raw material, which is highly available and versatile. The raw material for the production of pellets comes from waste that would be disposed of in nature, this factor significantly contributes to reducing the risk of fires. The use of forest residues and also waste from the wood industry, allows obtaining the final product at a lower cost. To produce the pellet, in addition to discards from the wood industries, various types of plant biomass are used, such as tree bark and pruning, sawdust, shavings, cereal straw, sugarcane bagasse and bamboo.</p>
            <p className='text-justify text-[#34220D] pt-4'>The main source of raw material comes from forestry, which is very important ecologically and also helps the economy, as it values low-value by-products that until recently were neglected, but which produce an excellent quality biofuel for having low ash content. After being collected, these materials are crushed and then dried, to later be transformed into powder and compressed to obtain the final form. The result is a 100% natural compound with a high calorific value.</p>
          </div>}        
        
        </div>
        
      </div>    
    </Layout>

    </div>
  )
};

export default Produtos;