
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
   
    <div className="mt-20 sm:mt-0 ">
        <img className="shadow-md shadow-[#3A881B]/40" alt="" src="/greenenergy_pellets_carrosel_08_md.png"  />
      </div>   

      <div className="text-xl md:text-2xl font-semibold text-[#727272] px-10 md:px-20 ">

        <div className="grid md:grid-cols-2 gap-10 pt-20">
        <div className=" col-span-1 order-2 md:order-first">
          <div>
          <h2 className="text-3xl text-[#3A881B]">O que são pellets </h2>
          <br/>
          <p className= 'flex justify-center text-justify text-[#34220D]'>Os pellets são formados por resíduos de madeira prensados em formato cilíndrico, que possuem entre 6 e 8 milímetros de diâmetro e entre 10 a 40 milímetros de comprimento. Durante o processo de produção, a matéria-prima é desidratada antes de ser comprimida, o que dá origem a um produto de grande poder calorífico e altamente eficiente. O pellet (granulado de madeira) é uma fonte de energia sustentável, feito a partir da matéria prima proveniente do descarte de produtos como a madeira 100% de reflorestamento sem o uso de aditivos ou produtos químicos.</p>
          </div>
        </div>
        <div className=' col-span-1'>
        <div className="">
        <img     
        src={'/greenenergy_sobre_01.png'}
        alt={'pellets'}
        className="w-full rounded-3xl border-[#3A881B] border-4"
        /> 
        </div>
        </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 pt-20">
        <div className=''>
          <div>
          <img     
          src={'/greenenergy_sobre_02.png'}
          alt={'pellets'}
          className="w-full rounded-3xl border-4 border-[#3A881B]"     
          /> 
          </div>
          </div> 
        <div className="">
          <div>
            <h2 className="text-3xl font-semibold text-[#3A881B]">Como podem ser utilizados </h2>
            <br/>
          <p className='flex justify-center items-center text-justify text-[#34220D]'>Os pellets são utilizados como geradores de calor, energia e solução higiênica para animais. Podendo ser utilizados para o aquecimento e geração de energia em equipamentos como salamandras, caldeiras, lareiras, trocadores de calor, fornos entre outros. Os pellets de madeira não produzem fumaça e resultam em poucos resíduos após a queima, com cinzas em torno de 0,7%. São muito utilizados em países europeus e norte-americanos para o aquecimento residencial e apresentam crescente uso no Brasil como fonte energética alternativa aos combustíveis fósseis.</p>
          </div>
          </div>                 
        </div>

        <div className="grid md:grid-cols-2 gap-10 pt-20">          
          <div className="col-span-1 order-2 md:order-first">
            <h2 className="text-3xl font-semibold text-[#3A881B]">Como podem ser utilizados </h2>
            <br/>
            <p className='text-justify text-[#34220D]'>Ao comprar pellets, o comprador deve estar atento a certificação que garante a procedência do produto tanto pela qualidade quanto a critérios ecológicos. As normas de fabricação, posteriormente de certificação, asseguram um padrão de qualidade do pellet de madeira em conformidade com critérios técnicos e ambientais. Os sistemas de certificação também poupam os consumidores da tarefa de verificar as características do produto em comparação com as diretrizes de uma norma ISO, através de um processo de verificação sistemático e eficiente. Os pellets certificados ENplus passam por uma série de exigências, de protocolos e de especificações técnicas. Por exemplo nos controles de umidade, se não passar pelas normas de qualidade, podem ser fabricados pellets com um teor de umidade mais elevado, o que vai reduzir a energia necessária, e produzir um pellet menos denso e com menor durabilidade. A temperatura da matéria-prima utilizada influencia também o processo de fabricação. Quanto maior a temperatura na entrada do processo, melhor a qualidade da prensagem, resultando em um biocombustível com maior densidade e durabilidade e com um consumo menor de energia. Os requisitos são baseados na norma internacional ISO 17225-2, que garantem qualidade em toda a cadeia de produção.</p>
          </div>
         
          <div className="">
        <div className="col-span-1">
        <img     
          src={'/greenenergy_sobre_03.png'}
          alt={'teste'}
          className="w-full rounded-3xl border-4 border-[#3A881B]"     
          /> 
          </div>
        </div>
        </div>
          
        <div className="grid md:grid-cols-2 gap-10 pt-20">
        <div className="">
        <div>
        <img     
          src={'/greenenergy_sobre_04.png'}
          alt={'teste'}
          className="w-full rounded-3xl border-4 border-[#3A881B]"     
          /> 
          </div>
        </div>
         <div>
            <h2 className="text-3xl text-[#3A881B]">Como podem ser utilizados </h2>
            <br/>
            <p className='text-justify text-[#34220D]'>A primeira vantagem envolve a matéria-prima, que apresenta uma grande disponibilidade e versatilidade. A matéria-prima para a produção de pellets é proveniente de resíduos que seriam descartamos na natureza, este fator contribui significativamente para a redução do risco de incêndios. O uso de resíduos florestais e também dos desperdícios provenientes da indústria da madeira, permite a obtenção do produto final com um menor custo. Para produzir o pellet, além dos descartes das indústrias madeireiras, diversos tipos de biomassa vegetal são utilizados, como por exemplo cascas e podas de árvores, serragem, maravalhas, palhas de cereais, bagaço da cana-de-açúcar e o bambu.   
            <br/> A principal fonte de matéria-prima vem da atividade florestal, o que é muito importante ecologicamente e ajuda na economia também, já que valoriza os subprodutos de baixo valor que até há pouco tempo eram desprezados, mas que produzem um biocombustível de excelente qualidade por ter baixo teor de cinza. Após serem recolhidos, esses materiais são triturados e depois secos, para posteriormente serem transformados em pó e comprimidos para se obter a forma final. O resultado é um composto 100% natural e de elevado poder calorífico.</p>
         </div>
        </div>   

        <div>
        </div>
      </div>    
    </Layout>

    </div>
  )
};

export default Produtos;