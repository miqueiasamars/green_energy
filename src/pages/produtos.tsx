
import { NextPage } from "next";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import Layout from "../components/template/dashboard/Layout";
import { Context } from "../data/contexts/Context";



const Produtos: NextPage = () => {

const {state, dispatch} = useContext(Context)

const div1Ref = useRef<HTMLDivElement>(null);
const div2Ref = useRef<HTMLDivElement>(null);
const div3Ref = useRef<HTMLDivElement>(null);
const div4Ref = useRef<HTMLDivElement>(null);
const div5Ref = useRef<HTMLDivElement>(null);
const div6Ref = useRef<HTMLDivElement>(null);
const [isVisible1, setIsVisible1] = useState(false);
const [isVisible2, setIsVisible2] = useState(false);
const [isVisible3, setIsVisible3] = useState(false);
const [isVisible4, setIsVisible4] = useState(false);
const [isVisible5, setIsVisible5] = useState(false);
const [isVisible6, setIsVisible6] = useState(false);

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
  const observer5 = new IntersectionObserver(([entry]) => {
    setIsVisible5(entry.isIntersecting);
  });
  const observer6 = new IntersectionObserver(([entry]) => {
    setIsVisible6(entry.isIntersecting);
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
  if (div5Ref.current) {
    observer5.observe(div5Ref.current);
  }
  if (div6Ref.current) {
    observer6.observe(div6Ref.current);
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
    if (div5Ref.current) {
      observer5.unobserve(div5Ref.current);
    }
    if (div6Ref.current) {
      observer6.unobserve(div6Ref.current);
    }
  };
}, [div1Ref, div2Ref, div3Ref, div4Ref, div5Ref, div6Ref]);

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
    <div className={`bg-[#ffffff] text-black`}>
    <Layout>
   
      <div className="flex justify-center items-center bg-center shadow-md shadow-[#3A881B]/40" style={{ backgroundImage: 'url(/greenenergy_pellets.png)', height:300 }}>
             <div className="text-white text-6xl font-bold pt-4">PRODUTOS</div>
      </div>

      <div className="text-xl md:text-2xl font-semibold text-[#727272]">

        <div className="grid md:grid-cols-2 pt-10 md:pt-20">
          <p ref={div1Ref} className={`${isVisible1&&'slide-in-text'} flex justify-center items-center px-6 md:px-20`}>A demanda por fontes de energia renovável tem aumentado nos últimos anos, e os pellets são uma opção cada vez mais popular nesse sentido. Eles são produzidos a partir de resíduos de madeira refinada e seca e podem ser usados em diversas aplicações, desde aquecimento de estufas e piscinas até fornos de padarias e cerâmicas.</p>
          <div ref={div2Ref} className={`${isVisible2&&'slide-in-text-reverse'} flex justify-center items-center pt-8 md:pt-0`}>
          <img     
          src={'/greenenergy_pellets_energia.png'}
          alt={'teste'}
          className={``}    
          /> 
          </div>
        </div>

        <div className="grid md:grid-cols-2 pt-10 md:pt-20">
        <div ref={div3Ref} className={`${isVisible3&&'slide-in-text'} flex justify-center items-center order-last md:order-first pt-8 md:pt-0`}>
          <img     
          src={'/greenenergy_pellets_energia_02.png'}
          alt={'teste'}
          className={``}    
          /> 
          </div>
          <p ref={div4Ref} className={`${isVisible4&&'slide-in-text-reverse'} flex justify-center items-center px-6 md:px-20`}>Além disso, os pellets são uma opção muito mais sustentável e ecológica do que os combustíveis fósseis, já que eles são feitos a partir de resíduos da indústria madeireira, que de outra forma poderiam acabar sendo descartados em aterros sanitários ou em áreas florestais, causando problemas ambientais.</p>
        </div>

        <div className="grid md:grid-cols-2 pt-10 md:pt-20">
          <p ref={div5Ref} className={`${isVisible5&&'slide-in-text'} flex justify-center items-center px-6 md:px-20`}>Em resumo, os pellets são uma solução versátil e ecologicamente correta para as necessidades energéticas de diversos setores, oferecendo benefícios econômicos e ambientais significativos. Com a crescente demanda por fontes de energia renovável e a necessidade de reduzir as emissões de gases de efeito estufa, é provável que os pellets se tornem uma opção ainda mais popular e amplamente utilizada no futuro.</p>
          <div ref={div6Ref} className={`${isVisible6&&'slide-in-text-reverse'} flex justify-center items-center pt-8 md:pt-0`}>
          <img     
          src={'/greenenergy_pellets_energia_03.png'}
          alt={'teste'}
          className={``}    
          /> 
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