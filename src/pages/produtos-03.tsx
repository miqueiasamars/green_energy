
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
         {status==='1'?
         <div className="px-10 md:px-20 pb-10 pt-10">
            <h2 className="text-2xl text-[#3A881B]">Pellets com certificado ENplus A1:</h2>
            <br/>
            <p className='text-justify text-[#34220D]'>Ao comprar pellets, o comprador deve estar atento a certificação que garante a procedência do produto tanto pela qualidade quanto a critérios ecológicos. As normas de fabricação, posteriormente de certificação, asseguram um padrão de qualidade do pellet de madeira em conformidade com critérios técnicos e ambientais. Os sistemas de certificação também poupam os consumidores da tarefa de verificar as características do produto em comparação com as diretrizes de uma norma ISO, através de um processo de verificação sistemático e eficiente. Os pellets certificados ENplus passam por uma série de exigências, de protocolos e de especificações técnicas. Por exemplo nos controles de umidade, se não passar pelas normas de qualidade, podem ser fabricados pellets com um teor de umidade mais elevado, o que vai reduzir a energia necessária, e produzir um pellet menos denso e com menor durabilidade. A temperatura da matéria-prima utilizada influencia também o processo de fabricação. Quanto maior a temperatura na entrada do processo, melhor a qualidade da prensagem, resultando em um biocombustível com maior densidade e durabilidade e com um consumo menor de energia. Os requisitos são baseados na norma internacional ISO 17225-2, que garantem qualidade em toda a cadeia de produção.</p>
         </div>       
         :
         <div className="px-10 md:px-20 pb-10 pt-10">
            <h2 className="text-2xl text-[#3A881B]">Pellets with ENplus A1 certificate:</h2>
            <br/>
            <p className='text-justify text-[#34220D]'>When buying pellets, the buyer must be aware of the certification that guarantees the origin of the product both in terms of quality and ecological criteria. The manufacturing standards, later certification, ensure a quality standard of wood pellets in compliance with technical and environmental criteria. Certification systems also spare consumers the task of verifying product characteristics against the guidelines of an ISO standard through a systematic and efficient verification process. ENplus certified pellets undergo a series of requirements, protocols and technical specifications. For example in humidity controls, if it does not pass the quality standards, pellets with a higher moisture content can be manufactured, which will reduce the energy required, and produce a less dense pellet with less durability. The temperature of the raw material used also influences the manufacturing process. The higher the temperature at the entrance to the process, the better the pressing quality, resulting in a biofuel with greater density and durability and with lower energy consumption. The requirements are based on the international standard ISO 17225-2, which guarantee quality throughout the production chain.</p>
         </div>}

        <div>
        </div>
      </div>    
    </Layout>

    </div>
  )
};

export default Produtos;