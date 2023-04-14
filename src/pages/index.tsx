import { NextPage } from "next";
import { useContext, useEffect, useRef, useState } from "react";
import Layout from "../components/template/dashboard/Layout";
import { Context } from "../data/contexts/Context";
import { IconChevron, IconChevronD, IconEyeF, IconSetaCD, IconSetaD, IconSetaED } from "../components/icons";

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
      {/* div Imagem    */}
      <div className="mt-20">

      {<img                
          src={"/greenenergy_pellets_escura.png"}         
          alt="Produtos-copps"
          className={`cursor-pointer w-full`}
      />}

      </div>


      {/* Trocador de imagem */}
      <div className="flex justify-between -mt-5">
        <div onClick={banerE} className="py-2 px-4 bg-[#3A881B]/90 text-white rounded-r-lg">
         {IconSetaED}    
        </div>
        <div onClick={banerD} className="py-2 px-4 bg-[#3A881B]/90 text-white rounded-l-lg">  
         {IconSetaCD}    
        </div>
      </div>
      
      {/* testes e pontinhos */}
      <div className="py-8 px-6 flex justify-center">
        <div>
          <div className="text-2xl text-[#30261D] custom-font-roboto-500">Sua Empresa de Pellets</div>  
          <div className="flex gap-4 pt-16 justify-center">
            <div onClick={()=>setStatusBaner(1)} className={`h-4 w-4 rounded-full bg-[#b7b4b4] ${statusBaner===1&&"bg-[#191919]"}`}></div>
            <div onClick={()=>setStatusBaner(2)} className={`h-4 w-4 rounded-full bg-[#b7b4b4] ${statusBaner===2&&"bg-[#191919]"}`}></div>
            <div onClick={()=>setStatusBaner(3)} className={`h-4 w-4 rounded-full bg-[#b7b4b4] ${statusBaner===3&&"bg-[#191919]"}`}></div>
            <div onClick={()=>setStatusBaner(4)} className={`h-4 w-4 rounded-full bg-[#b7b4b4] ${statusBaner===4&&"bg-[#191919]"}`}></div>
            <div onClick={()=>setStatusBaner(5)} className={`h-4 w-4 rounded-full bg-[#b7b4b4] ${statusBaner===5&&"bg-[#191919]"}`}></div>
            <div onClick={()=>setStatusBaner(6)} className={`h-4 w-4 rounded-full bg-[#b7b4b4] ${statusBaner===6&&"bg-[#191919]"}`}></div>
          </div>        
        </div>
      </div>

      <div className="px-6 pt-8"><div className="border-b-2"></div></div>
      
      {/* baner falndo sobre */}
      <div className="px-10 pt-10 grid grid-col-1 gap-6">
        <div className="rounded-lg border border-[#e9e7e7] px-6 py-6 sobra">
          <p className="text-2xl custom-font-roboto text-[#3A881B]"><h2>Texto:</h2></p>
          <p className="pt-4"><h2>São pequenos e compactos, o que torna o armazenamento muito fácil. Eles podem ser facilmente empilhados em sacos ou em silos, o que torna a logística de entrega mais simples.</h2></p>
        </div>
        <div className="rounded-lg border border-[#e9e7e7] px-6 py-6 sobra">
          <p className="text-2xl custom-font-roboto text-[#3A881B]"><h2>Texto:</h2></p>
          <p className="pt-4"><h2>São pequenos e compactos, o que torna o armazenamento muito fácil. Eles podem ser facilmente empilhados em sacos ou em silos, o que torna a logística de entrega mais simples.</h2></p>
        </div>
        <div className="rounded-lg border border-[#e9e7e7] px-6 py-6 sobra">
          <p className="text-2xl custom-font-roboto text-[#3A881B]"><h2>Texto:</h2></p>
          <p className="pt-4"><h2>São pequenos e compactos, o que torna o armazenamento muito fácil. Eles podem ser facilmente empilhados em sacos ou em silos, o que torna a logística de entrega mais simples.</h2></p>
        </div>
        <div className="rounded-lg border border-[#e9e7e7] px-6 py-6 sobra">
          <p className="text-2xl custom-font-roboto text-[#3A881B]"><h2>Texto:</h2></p>
          <p className="pt-4"><h2>São pequenos e compactos, o que torna o armazenamento muito fácil. Eles podem ser facilmente empilhados em sacos ou em silos, o que torna a logística de entrega mais simples.</h2></p>
        </div>
      </div>
      
      {/* Noticias Recentes */}
      <div className="bg-[#3A881B] mt-10 px-10 py-16 text-white font-extralight">

        <div className="text-2xl custom-font-roboto">Notícias Recentes</div>

        <div className="border-b py-2 pt-6">
          <p className=""><h1>12 ABR, 2023</h1></p>
          <div className="flex justify-between gap-2">
            <p className="pt-2">texto texto texto texto texto texto texto texto</p>
            <p className="">{IconSetaD}</p>
          </div>
        </div>

        <div className="border-b py-2 pt-6">
          <p className=""><h1>12 ABR, 2023</h1></p>
          <div className="flex justify-between gap-2">
            <p className="pt-2">texto texto texto texto texto texto texto texto</p>
            <p className="">{IconSetaD}</p>
          </div>
        </div>

        <div className="border-b py-2 pt-6">
          <p className=""><h1>12 ABR, 2023</h1></p>
          <div className="flex justify-between gap-2">
            <p className="pt-2">texto texto texto texto texto texto texto texto</p>
            <p className="">{IconSetaD}</p>
          </div>
        </div>

        <button className="border shadow-lg mt-8 px-4 py-1">Veja mais</button>
      </div>

      <div className="mt-10">
        <div>
          <p className="text-center custom-font-roboto text-2xl"><a className="custom-font-caveat">CONEHÇA </a> as nossas marcas</p>
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
          <p className="text-2xl"><h2>Notícias Green Energy</h2></p>  
          <p className="py-2"><h3>Inscreva-se e fique por dentro das notícias</h3></p> 
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
          <p className="text-2xl"><h2>Fale Conosco</h2></p>  
          <p className="py-2"><h3>A Green Energy está aqui para ajudar a responder suas perguntas</h3></p> 
          <button className="px-4 border border-white py-1 shadow-lg">Fale Conosco</button>
        </div>      
      </div>

      <div className="px-10 py-10">
        <div> 
          <p className="text-2xl custom-font-roboto">Green Energy</p>
          <p className="mt-4"><h4>Somos uma empresa Brasileira, voltada para a produção de energia renovável. Nos produzimos o que a de melhor em biomassa de pellets, utilizando matéria prima proveniente da serragem de madeira sem prejudicar o meio ambiente, garantindo o padrão e a qualidade de nossos produtos</h4></p> 
          <p className="pt-4"><h4>Acompanhando as tendências do mercado e desenvolvendo produtos sustentáveis a Green Energy investe no aperfeiçoamento das suas tecnologias de produção, com o objetivo de encontrar a união perfeita entre esses recursos. Todos os nossos produtos são adequados à norma ENPlus A1.</h4></p>       
        </div>
      </div>     
       
    </Layout>
    </div>
    </>
  )

}

