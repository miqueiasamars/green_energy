import { NextPage } from "next";
import { useContext, useEffect, useRef, useState } from "react";
import Layout from "../components/template/dashboard/Layout";
import { Context } from "../data/contexts/Context";
import { IconChevron, IconChevronD, IconEyeF, IconSetaCD, IconSetaD, IconSetaED } from "../components/icons";
import MySlider from "../components/slider/Slider";

export default function MyComponent() {

  const {state, dispatch} = useContext(Context)

  const div1Ref = useRef<HTMLDivElement>(null);
  const [isVisible1, setIsVisible1] = useState(false);

  const [statusBaner, setStatusBaner] = useState(1);
  console.log(statusBaner)
 

  useEffect(() => {
    const observer1 = new IntersectionObserver(([entry]) => {
      setIsVisible1(entry.isIntersecting);
    });    

    if (div1Ref.current) {
      observer1.observe(div1Ref.current);
    }

    return () => {
      if (div1Ref.current) {
        observer1.unobserve(div1Ref.current);
      }
     
    };
  }, [div1Ref]);


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
        menu: '1',        
        }
    });
},[dispatch])

const banerD = () => {
  if(statusBaner>=6){
       setStatusBaner(1)
    return
  }
  setStatusBaner(statusBaner+1)
}
const banerE = () => {
  if(statusBaner<=1){
    setStatusBaner(6)
 return
}
setStatusBaner(statusBaner-1)
  
}

  return (
    <>
    <div className="bg-white text-[#34220D]">
    <Layout> 
     
      <div>
        <MySlider/>
      </div>

      <div className="px-6 pt-8"><div className="border-b-2"></div></div>
      
      {/* baner falndo sobre */}
      <div className="px-10 py-10 grid grid-col-1 gap-6 bg-[url('/GreenEnergy_floresta.jpg')] bg-center bg-no-repeat w-screen">
        <div className="rounded-lg border border-[#e9e7e7] px-6 py-6 sobra bg-white">
          <div className="text-2xl custom-font-roboto text-[#3A881B]"><h2>Texto:</h2></div>
          <div className="pt-4"><h2>São pequenos e compactos, o que torna o armazenamento muito fácil. Eles podem ser facilmente empilhados em sacos ou em silos, o que torna a logística de entrega mais simples.</h2></div>
        </div>
        <div className="rounded-lg border border-[#e9e7e7] px-6 py-6 sobra bg-white">
          <div className="text-2xl custom-font-roboto text-[#3A881B]"><h2>Texto:</h2></div>
          <div className="pt-4"><h2>São pequenos e compactos, o que torna o armazenamento muito fácil. Eles podem ser facilmente empilhados em sacos ou em silos, o que torna a logística de entrega mais simples.</h2></div>
        </div>
        <div className="rounded-lg border border-[#e9e7e7] px-6 py-6 sobra bg-white"> 
          <div className="text-2xl custom-font-roboto text-[#3A881B]"><h2>Texto:</h2></div>
          <div className="pt-4"><h2>São pequenos e compactos, o que torna o armazenamento muito fácil. Eles podem ser facilmente empilhados em sacos ou em silos, o que torna a logística de entrega mais simples.</h2></div>
        </div>
        <div className="rounded-lg border border-[#e9e7e7] px-6 py-6 sobra bg-white">
          <div className="text-2xl custom-font-roboto text-[#3A881B]"><h2>Texto:</h2></div>
          <div className="pt-4"><h2>São pequenos e compactos, o que torna o armazenamento muito fácil. Eles podem ser facilmente empilhados em sacos ou em silos, o que torna a logística de entrega mais simples.</h2></div>
        </div>
      </div>
      
      {/* Noticias Recentes */}
      <div className="bg-[#3A881B] px-10 py-16 text-white font-extralight">

        <div className="text-2xl custom-font-roboto">Notícias Recentes</div>

        <div className="border-b py-2 pt-6">
          <div className=""><h1>12 ABR, 2023</h1></div>
          <div className="flex justify-between gap-2">
            <div className="pt-2">texto texto texto texto texto texto texto texto</div>
            <div className="">{IconSetaD}</div>
          </div>
        </div>

        <div className="border-b py-2 pt-6">
          <div className=""><h1>12 ABR, 2023</h1></div>
          <div className="flex justify-between gap-2">
            <div className="pt-2">texto texto texto texto texto texto texto texto</div>
            <div className="">{IconSetaD}</div>
          </div>
        </div>

        <div className="border-b py-2 pt-6">
          <div className=""><h1>12 ABR, 2023</h1></div>
          <div className="flex justify-between gap-2">
            <div className="pt-2">texto texto texto texto texto texto texto texto</div>
            <div className="">{IconSetaD}</div>
          </div>
        </div>

        <button className="border shadow-lg mt-8 px-4 py-1">Veja mais</button>
      </div>

      <div className="mt-10">
        <div>
          <div className="text-center custom-font-roboto text-2xl"><a className="custom-font-caveat">CONEHÇA </a> as nossas marcas</div>
          <div className="flex gap-6 justify-center pt-8">
          <div className="border rounded-full px-6 py-10 bg-white shadow-lg">Marca 1</div>
          <div className="border rounded-full px-6 py-10 bg-white shadow-lg">Marca 2</div>
          </div>
          <div className="flex justify-center"><button className="border border-[#3A881B] shadow-lg mt-8 px-6 py-1">Todas as Marcas</button></div>
        </div>
      </div>

      {/* Mapa com informações */}
      <div className="bg-[#3A881B] px-10 mt-10 py-10 text-white font-extralight">
        <div>    
          <div className="text-2xl"><h2>Notícias Green Energy</h2></div>  
          <div className="py-2"><h3>Inscreva-se e fique por dentro das notícias</h3></div> 
          <button className="bg-white text-[#3A881B] px-4 py-1 shadow-lg">Inscreva-se</button>
        </div>
        <div className="pt-2 px-4">
        <img                
          src={"/greenenergy_mapa.png"}         
          alt="Produtos-copps"
          className={`w-full`}
      />
        </div>
        <div>    
          <div className="text-2xl"><h2>Fale Conosco</h2></div>  
          <div className="py-2"><h3>A Green Energy está aqui para ajudar a responder suas perguntas</h3></div> 
          <button className="px-4 border border-white py-1 shadow-lg">Fale Conosco</button>
        </div>      
      </div>

      <div className="px-10 py-10">
        <div> 
          <div className="text-2xl custom-font-roboto">Green Energy</div>
          <div className="mt-4"><h4>Somos uma empresa Brasileira, voltada para a produção de energia renovável. Nos produzimos o que a de melhor em biomassa de pellets, utilizando matéria prima proveniente da serragem de madeira sem prejudicar o meio ambiente, garantindo o padrão e a qualidade de nossos produtos</h4></div> 
          <div className="pt-4"><h4>Acompanhando as tendências do mercado e desenvolvendo produtos sustentáveis a Green Energy investe no aperfeiçoamento das suas tecnologias de produção, com o objetivo de encontrar a união perfeita entre esses recursos. Todos os nossos produtos são adequados à norma ENPlus A1.</h4></div>       
        </div>
      </div>     
       
    </Layout>
    </div>
    </>
  )

}

