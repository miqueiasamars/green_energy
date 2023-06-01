import { NextPage } from "next";
import { useContext, useEffect, useRef, useState } from "react";
import Layout from "../components/template/dashboard/Layout";
import { Context } from "../data/contexts/Context";
import { IconChevron, IconChevronD, IconEyeF, IconSetaCD, IconSetaD, IconSetaED } from "../components/icons";
import MySlider from "../components/slider/Slider";
import router from "next/router";

export default function MyComponent() {

  const {state, dispatch} = useContext(Context)
  
  const status = state.dados.status

  const [statusBaner, setStatusBaner] = useState(1);

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

      <div className="md:px-5 md:gap-5 px-10 py-10 grid grid-col-1 md:grid-cols-2 gap-6 bg-[url('/GreenEnergy_floresta.jpg')] bg-center bg-no-repeat w-full">

      {status==='1'?<div className="flex justify-end">
        <div className=" rounded-lg border border-[#e9e7e7] px-6 py-6 sobra bg-white md:max-w-md">
          <div className="text-2xl text-[#3A881B]"><h2>O que são pellets:</h2></div>
          <div className="pt-4 text-lg"><h2>Os pellets são formados por resíduos de madeira prensados em formato cilíndrico, que possuem entre 6 e 8 milímetros <a className="underline cursor-pointer" onClick={()=>router.push("/produtos-01")}>Saiba mais...</a></h2></div>
          <div className="flex justify-center pt-4"><img src="/greenenergy_center_02.png" className="w-full md:w-96"/></div>
        </div>
      </div>
      :
      <div className="flex justify-end">
        <div className=" rounded-lg border border-[#e9e7e7] px-6 py-6 sobra bg-white md:max-w-md">
          <div className="text-2xl text-[#3A881B]"><h2>What are pellets:</h2></div>
          <div className="pt-4 text-lg"><h2>The pellets are formed by wood waste pressed in a cylindrical shape, which are between 6 and 8 millimeters <a className="underline cursor-pointer" onClick={()=>router.push("/produtos-01")}>Know more...</a></h2></div>
          <div className="flex justify-center pt-4"><img src="/greenenergy_center_02.png" className="w-full md:w-96"/></div>
        </div>
      </div>}

      {status==='1'?<div className="flex justify-start">
        <div className="rounded-lg border border-[#e9e7e7] px-6 py-6 sobra bg-white md:max-w-md">
          <div className="text-2xl text-[#3A881B]"><h2>Como podem ser utilizados:</h2></div>
          <div className="pt-4 text-lg"><h2>Os pellets são utilizados como geradores de calor, energia e solução higiênica para animais. Podendo ser utilizados <a className="underline cursor-pointer" onClick={()=>router.push("/produtos-02")}>Saiba mais...</a></h2></div>
          <div className="flex justify-center pt-4"><img src="/greenenergy_center_03.png" className="w-full md:w-96"/></div>
        </div>
      </div>
      :
      <div className="flex justify-start">
        <div className="rounded-lg border border-[#e9e7e7] px-6 py-6 sobra bg-white md:max-w-md">
          <div className="text-2xl text-[#3A881B]"><h2>How they can be used:</h2></div>
          <div className="pt-4 text-lg"><h2>The pellets are used as generators of heat, energy and hygienic solution for animals. Can be used< a className="underline cursor-pointer" onClick={()=>router.push("/produtos-02")}>Know more...</a></h2></div>
          <div className="flex justify-center pt-4"><img src="/greenenergy_center_03.png" className="w-full md:w-96"/></div>
        </div>
      </div>}

      {status==='1'?<div className="flex justify-end">
        <div className="rounded-lg border border-[#e9e7e7] px-6 py-6 sobra bg-white md:max-w-md"> 
          <div className="text-2xl text-[#3A881B]"><h2>Pellets com certificado ENplus A1:</h2></div>
          <div className="pt-4 text-lg"><h2>Ao comprar pellets, o comprador deve estar atento a certificação que garante a procedência do produto tanto pela <a className="underline cursor-pointer" onClick={()=>router.push("/produtos-03")}>Saiba mais...</a></h2></div>
          <div className="flex justify-center pt-4"><img src="/greenenergy_center_01.png" className="w-full md:w-96"/></div>
        </div>
      </div>
      :
      <div className="flex justify-end">
        <div className="rounded-lg border border-[#e9e7e7] px-6 py-6 sobra bg-white md:max-w-md"> 
          <div className="text-2xl text-[#3A881B]"><h2>Pellets with ENplus A1 certificate:</h2></div>
          <div className="pt-4 text-lg"><h2>When buying pellets, the buyer must pay attention to the certification that guarantees the origin of the product both by <a className="underline cursor-pointer" onClick={()=>router.push("/produtos-03")}>Know more...</a></h2></div>
          <div className="flex justify-center pt-4"><img src="/greenenergy_center_01.png" className="w-full md:w-96"/></div>
        </div>
      </div>}

      {status==='1'?<div className="flex justify-start">
        <div className="rounded-lg border border-[#e9e7e7] px-6 py-6 sobra bg-white md:max-w-md">
          <div className="text-2xl text-[#3A881B]"><h2>Pellets x Vantagens econômicas e ecológicas</h2></div>
          <div className="pt-4 text-lg"><h2>A primeira vantagem envolve a matéria-prima, que apresenta uma grande disponibilidade e versatilidade. A matéria-prima <a className="underline cursor-pointer" onClick={()=>router.push("/produtos-04")}>Saiba mais...</a></h2></div>
          <div className="flex justify-center pt-4"><img src="/greenenergy_center_04.png" className="w-full md:w-96"/></div>
        </div>
      </div>
      :
      <div className="flex justify-start">
        <div className="rounded-lg border border-[#e9e7e7] px-6 py-6 sobra bg-white md:max-w-md">
          <div className="text-2xl text-[#3A881B]"><h2>Pellets x Economic and ecological advantages:</h2></div>
          <div className="pt-4 text-lg"><h2>The first advantage involves the raw material, which is highly available and versatile. the raw material <a className="underline cursor-pointer" onClick={()=>router.push("/produtos-04")}>Know more...</a></h2></div>
          <div className="flex justify-center pt-4"><img src="/greenenergy_center_04.png" className="w-full md:w-96"/></div>
        </div>
      </div>}

      </div>
      
      <div className="px-10 py-10">
        {status==='1'?<div> 
          <div className="text-2xl font-semibold">Green Energy</div>
          <div className="font-semibold pt-4">QUEM SOMOS:</div>
          <div className="pt-4"><h4>Somos uma empresa Brasileira, voltada para a produção de energia renovável. Nos produzimos o que a de melhor em biomassa de pellets, utilizando matéria prima proveniente da serragem de madeira sem prejudicar o meio ambiente, garantindo o padrão e a qualidade de nossos produtos</h4></div> 
          <div className="pt-4"><h4>Acompanhando as tendências do mercado e desenvolvendo produtos sustentáveis a Green Energy investe no aperfeiçoamento das suas tecnologias de produção, com o objetivo de encontrar a união perfeita entre esses recursos. Todos os nossos produtos são adequados à norma ENPlus A1.</h4></div>       
          <div className="font-semibold pt-4">MISSÃO:</div>
          <div className="pt-4"><h4>Temos como missão oferecer aos nossos clientes o mais alto padrão de qualidade em biomassa de pellets, para o mercado interno e externo. A Green Energy tem como objetivo principal a sustentabilidade. Buscando harmonizar o desenvolvimento econômico e a conservação ambiental.</h4></div> 
          <div className="font-semibold pt-4">VALORES:</div>
          <div className="pt-4"><h4>Nossa empresa preza pelo desenvolvimento de produtos provenientes de matérias primas que não prejudiquem o meio ambiente. Portamos em nossa bandeira valores inegociáveis, como a preservação da natureza, o respeito aos seres humanos e aos animais.</h4></div> 
        </div>
        :
        <div> 
          <div className="text-2xl font-semibold">Green Energy</div>
          <div className="font-semibold pt-4">WHO WE ARE:</div>
          <div className="pt-4"><h4>We are a Brazilian company, focused on the production of renewable energy. We produce the best in pellet biomass, using raw material from sawdust without harming the environment, guaranteeing the standard and quality of our products.</h4></div> 
          <div className="pt-4"><h4>Following market trends and developing sustainable products, Green Energy invests in the improvement of its production technologies, with the aim of finding the perfect union between these resources. All our products comply with the ENPlus A1 standard.</h4></div>       
          <div className="font-semibold pt-4">MISSION:</div>
          <div className="pt-4"><h4>Our mission is to offer our customers the highest quality standard in pellet biomass for the domestic and foreign markets. Green Energy's main objective is sustainability. Seeking to harmonize economic development and environmental conservation.</h4></div> 
          <div className="font-semibold pt-4">VALUES:</div>
          <div className="pt-4"><h4>Our company values the development of products from raw materials that do not harm the environment. We carry in our flag non-negotiable values, such as the preservation of nature, respect for human beings and animals.</h4></div> 
        </div>}
      </div> 

      {/* Noticias Recentes */}
      <div className="bg-[#3A881B] px-10 py-16 text-white font-extralight">

      {status==='1'?<div className="text-2xl font-semibold">Notícias Recentes</div>:
      <div className="text-2xl font-semibold">Recent news</div>}

      <div className="border-b py-2 pt-6">
        <div className=""><h1>24 ABR, 2023</h1></div>
        
        <div className="flex justify-between gap-2">
          <div className="pt-2">Empresas ESG investem em tecnologia e sustentabilidade para um mundo melhor</div>
          <div className=""><a onClick={()=>router.push("https://jornaldebrasilia.com.br/blogs-e-colunas/analice-nicolau/empresas-esg-investem-em-tecnologia-e-sustentabilidade-para-um-mundo-melhor/")}>{IconSetaD}</a></div>
        </div>
      </div>

      <div className="border-b py-2 pt-6">
        <div className=""><h1>12 ABR, 2023</h1></div>
        <div className="flex justify-between gap-2">
          <div className="pt-2">Novas metas para acelerar a transição energética na União Europeia</div>
          <div className=""><a onClick={()=>router.push("https://www.novoperfil.pt/Artigos/470792-Novas-metas-para-acelerar-a-transicao-energetica-na-Uniao-Europeia.html")}>{IconSetaD}</a></div>
        </div>
      </div>

      <div className="border-b py-2 pt-6">
          <div className=""><h1>09 ABR, 2023</h1></div>
          <div className="flex justify-between gap-2">
            <div className="pt-2">Crédito de carbono: Como o Brasil pode (e deve) ser pioneiro nesse novo mercado?</div>
            <div className=""><a onClick={()=>router.push("https://www.moneytimes.com.br/credito-de-carbono-brasil-pioneiro-novo-mercado/")}>{IconSetaD}</a></div>
          </div>
        </div>

        {/* <button className="border shadow-lg mt-8 px-4 py-1">Veja mais</button> */}
      </div> 

       <div className="py-10">
        <div>
          {status==='1'?<div className="text-center font-semibold text-2xl"><a className="custom-font-caveat">CONHEÇA </a> nossa linha para pets</div>:
          <div className="text-center font-semibold text-2xl"><a className="custom-font-caveat">KNOW </a>our line for pets</div>}
          <div className="flex gap-6 justify-center pt-8">
          <div className="border border-[#3A881B] rounded-full px-4 py-4 bg-white shadow-lg"> <img src="/greenenergy_pets.png" className="w-36"/></div>
          </div>
          {status==='1'?<div className="flex justify-center"><button className="border border-[#3A881B] shadow-lg mt-8 px-6 py-1">Linha Pets</button></div>:
          <div className="flex justify-center"><button className="border border-[#3A881B] shadow-lg mt-8 px-6 py-1">line Pets</button></div>}
        </div>
      </div>     

      {/* Mapa com informações */}
      <div className="bg-[#3A881B] px-10 pt-10 py-10 text-white font-extralight md:grid md:grid-cols-3 border-b">
      <div className="md:flex md:items-center">
        {status==='1'?<div>    
          <div className="text-2xl"><h2>Notícias Green Energy</h2></div>  
          <div className="py-2"><h3>Inscreva-se e fique por dentro das notícias</h3></div> 
          <button className="bg-white text-[#3A881B] px-4 py-1 shadow-lg">Inscreva-se</button>
        </div>
        :
        <div>    
          <div className="text-2xl"><h2>Green Energy News</h2></div>  
          <div className="py-2"><h3>Sign up and stay on top of the news</h3></div> 
          <button className="bg-white text-[#3A881B] px-4 py-1 shadow-lg">sign up</button>
        </div>}
      </div>
        <div className="pt-2 px-4">
        <img                
          src={"/greenenergy_mapa.png"}         
          alt="Produtos-copps"
          className={`w-full md:w-`}
      />
        </div>
      <div className="md:flex md:items-center">
       {status==='1'?<div className="md:pl-10">    
          <div className="text-2xl"><h2>Fale Conosco</h2></div>
          <div className="py-2"><h3>A Green Energy está aqui para ajudar a responder suas perguntas</h3></div> 
          <button className="px-4 border border-white py-1 shadow-lg">Fale Conosco</button>
        </div> 
        :
        <div className="md:pl-10">    
          <div className="text-2xl"><h2>Contact us</h2></div>  
          <div className="py-2"><h3>Green Energy is here to help answer your questions</h3></div> 
          <button className="px-4 border border-white py-1 shadow-lg">Contact us</button>
        </div>}   
      </div>
      </div>            
       
    </Layout>
    </div>
    </>
  )

}

