import { NextPage } from "next";
import { useContext, useEffect, useRef, useState } from "react";
import Layout from "../components/template/dashboard/Layout";
import { Context } from "../data/contexts/Context";
import ModalDelete from "../components/ModalDelete";

export default function MyComponent() {

  const {state, dispatch} = useContext(Context)

  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  console.log(isVisible1,isVisible2,isVisible3,isVisible4)

  useEffect(() => {
    const observer1 = new IntersectionObserver(([entry]) => {
      setIsVisible1(entry.isIntersecting);
    });
    const observer2 = new IntersectionObserver(([entry]) => {
      setIsVisible2(entry.isIntersecting);
    });
    const observer3 = new IntersectionObserver(([entry]) => {
      setIsVisible3(entry.isIntersecting);
    });
    const observer4 = new IntersectionObserver(([entry]) => {
      setIsVisible4(entry.isIntersecting);
    });

    if (div1Ref.current) {
      observer1.observe(div1Ref.current);
    }
    if (div2Ref.current) {
      observer2.observe(div2Ref.current);
    }
    if (div3Ref.current) {
      observer3.observe(div3Ref.current);
    }
    if (div4Ref.current) {
      observer4.observe(div4Ref.current);
    }

    return () => {
      if (div1Ref.current) {
        observer1.unobserve(div1Ref.current);
      }
      if (div2Ref.current) {
        observer2.unobserve(div2Ref.current);
      }
      if (div3Ref.current) {
        observer3.unobserve(div3Ref.current);
      }
      if (div4Ref.current) {
        observer4.unobserve(div4Ref.current);
      }
    };
  }, [div1Ref, div2Ref, div3Ref, div4Ref]);


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
        dados: '1',        
        }
    });
},[dispatch])

console.log(state.produtos.banir)
const tt = () => {
  dispatch({
    type: 'PRODUTOS',
    payload: {
      banir: '1',
    } 
    });
}
 
  return (
    <>
    <Layout>    
    
    <div className="bg-[#ffffff] text-[#494949]">

    {/* <div className=" bg-center" style={{ backgroundImage: 'url(/greenenergy_pellets4.gif)', height:660 }}>
      <div className="grid md:grid-cols-2"> 
      <div className="flex flex-col justify-center pt-52 sm:pt-60 md:pt-64 ge_container">
      <div className={`font-bold text-2xl md:text-3xl lg:text-4xl px-6 sm:px-8 md:px-10 lg:px-20 ge_container`} ref={div1Ref}>
       <p className={`${isVisible1&&'slide-in-text'} text-white`}>Oferecemos <a className="text-[#67ff2b]">Pellets</a> de qualidade e produzidos de forma responsável.</p>
       <p className={`${isVisible1&&'slide-in-text'} text-white pt-2`}>Cuidamos do meio ambiente.</p>
       <p className={`${isVisible1&&'slide-in-text-reverse'} text-white text-xl font-semibold pt-2`}>Pellets de qualidade para aquecer com sustentabilidade. Conte conosco!</p>
       <div className="flex justify-center sm:justify-start pt-10"><button onClick={tt} className={`${isVisible1&&'slide-in-text'} bg-white/25 hover:bg-white/60 shadow-lg backdrop-blur-sm text-[#67ff2b] hover:text-[#245510] border border-white rounded-lg px-4 sm:px-10 py-2 text-2xl font-semibold`}>Fale com um especialista</button></div>
       </div> 
       </div>
       </div>     
    </div> */}

{/* Oferecemos Pellets de qualidade e produzidos de forma responsável.

Cuidamos do meio ambiente.

Pellets de qualidade para aquecer com sustentabilidade. Conte conosco! */}


    <div className="ge_container_01">
      <div className="bg-center background-image"></div>
      <div className="text text-center">
      <div className={`font-bold text-2xl md:text-3xl lg:text-4xl px-6 sm:px-8 md:px-10 lg:px-20`} ref={div1Ref}>
       <p className={`${isVisible1&&'slide-in-text'} text-white`}>Oferecemos <a className="text-[#67ff2b]">Pellets</a> de qualidade e produzidos de forma responsável.</p>
       <p className={`${isVisible1&&'slide-in-text'} text-white pt-2`}>Cuidamos do meio ambiente.</p>
       <p className={`${isVisible1&&'slide-in-text-reverse'} text-white text-xl font-semibold pt-2`}>Pellets de qualidade para aquecer com sustentabilidade. Conte conosco!</p>
       <div className="flex justify-center pt-10"><button onClick={tt} className={`${isVisible1&&'slide-in-text'} bg-white/25 hover:bg-white/60 shadow-lg backdrop-blur-sm text-[#67ff2b] hover:text-[#245510] border border-white rounded-lg px-4 sm:px-10 py-2 text-2xl font-semibold`}>Fale com um especialista</button></div>
       </div> 
      </div>
    </div>


    <div className="grid md:grid-cols-2 gap-4 pt-16 text-xl font-semibold px-4 sm:px-8 md:px-10 lg:px-20 ge_container">  
    <div ref={div2Ref} className="flex items-center">
    <div className="border-4 px-4 py-4 rounded-lg shadow-md border-[#4abe1c]/50">
    <p className={`${isVisible2&&'slide-in-text'} md:text-3xl lg:text-4xl font-bold text-[#4abe1c]`}>
    Pellets: uma solução versátil 
    </p>
    <p className="pt-6">
      A demanda por fontes de energia renovável tem aumentado nos últimos anos, e os pellets são uma opção cada vez mais popular nesse sentido. Eles são produzidos a partir de resíduos de madeira refinada e seca e podem ser usados em diversas aplicações, desde aquecimento de estufas e piscinas até fornos de padarias e cerâmicas. <a className="text-[#4abe1c] hover:underline decoration-double cursor-pointer">Saiba mais ...</a>
    </p>
    </div>
    </div>

    <div ref={div3Ref} className={`${isVisible3&&'slide-in-text-reverse'}`}>
      <img     
      src={'/greenenergy_pellets_energia.png'}
      alt={'teste'}
      className={`w-full`}    
      /> 
    </div>    
    </div>

    <div className={`bg-[#3A881B] h-40 mt-10`}></div>

    <div  className={`grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-10 lg:px-20 -mt-20`}>
      <div className={`border-8 rounded-md shadow-md bg-white`}>
      <img     
      src={'/greenenergy_pellets_post_01.png'}
      alt={'teste'}
      className={`w-full`}    
      />  
      <div className="px-4 py-6">
        <p className="text-2xl font-bold text-[#4abe1c]">Fácil armazenamento:</p>
        <p className="pt-2">São pequenos e compactos, o que torna o armazenamento muito fácil. Eles podem ser facilmente empilhados em sacos ou em silos, o que torna a logística de entrega mais simples.</p>
      </div>         
      </div>

      <div className="border-8 rounded-md shadow-md bg-white">
      <img     
      src={'/greenenergy_pellets_post_02.png'}
      alt={'teste'}
      className={`w-full`}    
      />  
      <div className="px-4 py-6">
        <p className="text-2xl font-bold text-[#4abe1c]">Versatilidade:</p>
        <p className="pt-2">Os pellets podem ser utilizados em uma variedade de aplicações, como aquecimento residencial e comercial, geração de energia elétrica, aquecimento de estufas, entre outros. Isso os torna uma fonte de energia versátil e flexível.</p>
      </div>         
      </div>

      <div className="border-8 rounded-md shadow-md bg-white">
      <img     
      src={'/greenenergy_pellets_post_03.png'}
      alt={'teste'}
      className={`w-full`}    
      />  
      <div className="px-4 py-6">
        <p className="text-2xl font-bold text-[#4abe1c]">Redução das emissões de CO2:</p>
        <p className="pt-2">O uso de pellets como fonte de energia pode ajudar a reduzir as emissões de CO2, já que a produção de pellets é considerada neutra em carbono. Além disso, os pellets emitem menos poluentes atmosféricos do que outros combustíveis fósseis.</p>
      </div>         
      </div>

      <div className="border-8 rounded-md shadow-md bg-white">
      <img     
      src={'/greenenergy_pellets_post_04.png'}
      alt={'teste'}
      className={`w-full`}    
      />  
      <div className="px-4 py-6">
        <p className="text-2xl font-bold text-[#4abe1c]">Energia limpa e renovável:</p>
        <p className="pt-2">Os pellets são uma fonte de energia renovável e limpa, pois são produzidos a partir de materiais naturais que são facilmente renováveis.</p>
      </div>         
      </div>

      <div className="border-8 rounded-md shadow-md bg-white">
      <img     
      src={'/greenenergy_pellets_post_05.png'}
      alt={'teste'}
      className={`w-full`}    
      />  
      <div className="px-4 py-6">
        <p className="text-2xl font-bold text-[#4abe1c]">Baixo custo:</p>
        <p className="pt-2">São uma fonte de energia relativamente barata em comparação com outras fontes de energia, como o petróleo ou o gás natural. Além disso, como a produção de pellets é altamente padronizada, os preços são previsíveis e estáveis.</p>
      </div>         
      </div>

      <div className="border-8 rounded-md shadow-md bg-white">
      <img     
      src={'/greenenergy_pellets_post_06.png'}
      alt={'teste'}
      className={`w-full`}    
      />  
      <div className="px-4 py-6">
        <p className="text-2xl font-bold text-[#4abe1c]">Eficiência energética:</p>
        <p className="pt-2">Altamente eficientes em termos energéticos, pois têm um poder calorífico elevado e uma baixa umidade, o que significa que produzem mais calor por unidade de combustível do que outros tipos de biomassa.</p>
      </div>         
      </div>
      </div>

      <div className={`bg-[#3A881B] h-40 -mt-20`}></div>

      <div ref={div4Ref} className={`pt-10 md:px-16 lg:px-40 ge_container`}>
        <p className={`${isVisible4&&'slide-in-text-reverse'} text-2xl font-bold text-[#4abe1c] px-6`}>Tem alguma dúvida? Entre em contato conosco e teremos prazer em ajudá-lo.</p>
      </div>   

      <div className="px-6 md:px-16 lg:px-40">
      <form>
        {/*Nome Cliente */}      
        <label>
          <p className="flex px-4 items-center gap-2 text-[#3A881B] pt-10">Nome Completo</p>
          <div className="flex shadow-sm">    
          <input
          // value={state.dados?.nome}
          // onChange={nomeEvento}
          type="text"
          name="name"
          id="name"
          className={`flex-1 rounded-md appearance-none px-3 py-2 border border-[#3A881B] placeholder-[#969595] text-gray-900 focus:outline-none focus:border-1 focus:border-[#040a02] focus:z-10`}
          placeholder=""
          />        
          </div> 
        </label>

          <div className="grid md:grid-cols-2 gap-4">
            {/*Nome Cliente */}      
            <label>
              <p className="flex px-4 items-center gap-2 text-[#3A881B] pt-2">E-mail</p>
              <div className="flex shadow-sm">    
              <input
              // value={state.dados?.nome}
              // onChange={nomeEvento}
              type="text"
              name="name"
              id="name"
              className={`flex-1 rounded-md appearance-none px-3 py-2 border border-[#3A881B] placeholder-[#969595] text-gray-900 focus:outline-none focus:border-1 focus:border-[#040a02] focus:z-10`}
              placeholder=""
              />        
              </div> 
            </label>

            {/*Nome Cliente */}      
            <label>
              <p className="flex px-4 items-center gap-2 text-[#3A881B] pt-2">Telefone</p>
              <div className="flex shadow-sm">    
              <input
              // value={state.dados?.nome}
              // onChange={nomeEvento}
              type="text"
              name="name"
              id="name"
              className={`flex-1 rounded-md appearance-none px-3 py-2 border border-[#3A881B] placeholder-[#969595] text-gray-900 focus:outline-none focus:border-1 focus:border-[#040a02] focus:z-10`}
              placeholder=""
              />        
              </div> 
            </label>
          </div>

        {/*Nome Cliente */}      
        <label>
          <p className="flex px-4 items-center gap-2 text-[#3A881B] pt-2">Títuloo</p>
          <div className="flex shadow-sm">    
          <input
          // value={state.dados?.nome}
          // onChange={nomeEvento}
          type="text"
          name="name"
          id="name"
          className={`flex-1 rounded-md appearance-none px-3 py-2 border border-[#3A881B] placeholder-[#969595] text-gray-900 focus:outline-none focus:border-1 focus:border-[#040a02] focus:z-10`}
          placeholder=""
          />        
          </div> 
        </label>

        {/*Nome Cliente */}      
        <label>
          <p className="flex px-4 items-center gap-2 text-[#3A881B] pt-2">Mensagem</p>
          <div className="flex shadow-sm">    
          <textarea
          // value={state.dados?.nome}
          // onChange={nomeEvento}
          name="name"
          id="name"
          className={`flex-1 h-36 rounded-md appearance-none px-3 py-2 border border-[#3A881B] placeholder-[#969595] text-gray-900 focus:outline-none focus:border-1 focus:border-[#040a02] focus:z-10`}
          placeholder=""
          />        
          </div> 
        </label>

        <div className="flex justify-center sm:justify-end pt-2"><button className={`shadow-sm text-[#3A881B] border border-[#3A881B] hover:border-[#67ff2b] rounded-md px-10 py-1 text-2xl font-semibold mt-6`}>ENVIAR FORMULÁRIO</button></div>
      </form>
      </div>

      </div>
    
    </Layout>
    </>
  )

}

