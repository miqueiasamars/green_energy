
import { NextPage } from "next";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import Layout from "../components/template/dashboard/Layout";
import { Context } from "../data/contexts/Context";


const Sobre: NextPage = () => {

const {state, dispatch} = useContext(Context)

const [tela, setTela] = useState(0);

const div1Ref = useRef<HTMLDivElement>(null);
const div2Ref = useRef<HTMLDivElement>(null);
const div3Ref = useRef<HTMLDivElement>(null);
const div4Ref = useRef<HTMLDivElement>(null);
const [isVisible1, setIsVisible1] = useState(false);
const [isVisible2, setIsVisible2] = useState(false);
const [isVisible3, setIsVisible3] = useState(false);
const [isVisible4, setIsVisible4] = useState(false);

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
   
      <div className="flex justify-center items-center bg-center shadow-md shadow-[#4abe1c]/40" style={{ backgroundImage: 'url(/greenenergy_pellets.png)', height:300 }}>
             <div className={`text-white text-6xl font-bold pt-4`}>SOBRE</div>
      </div>      

      <div className="px-10 md:px-40 py-10 ge_container">
        <h2 className={`text-2xl font-bold text-[#4abe1c] pt-10 ${isVisible1&&'slide-in-text'}`} ref={div1Ref}>QUEM SOMOS:</h2>
        <h3 className={`${isVisible1&&'slide-in-text-reverse'}`}>
          <p className="text-xl font-semibold pt-6">A Green Energy é uma empresa Brasileira, voltada para a produção de energia renovável. Nos produzimos o que a de melhor em biomassa de pellets, utilizando matéria prima proveniente da serragem de madeira sem prejudicar o meio ambiente, garantindo o padrão e a qualidade de nossos produtos.</p>
          <p className="text-xl font-semibold pt-6">Acompanhando as tendências do mercado e desenvolvendo produtos sustentáveis a Green Energy investe no aperfeiçoamento das suas tecnologias de produção, com o objetivo de encontrar a união perfeita entre esses recursos. Todos os nossos produtos são adequados à norma ENPlus A1.</p>
        </h3>

        <h2 className={`text-2xl font-bold text-[#4abe1c] pt-10 ${isVisible2&&'slide-in-text'}`} ref={div2Ref} >MISSÃO:</h2>
        <h3>
          <p className={`text-xl font-semibold pt-6 ${isVisible2&&'slide-in-text-reverse'}`}>Temos como missão oferecer aos nossos clientes o mais alto padrão de qualidade em biomassa de pellets, para o mercado interno e externo. A Green Energy tem como objetivo principal a sustentabilidade. Buscando harmonizar o desenvolvimento econômico e a conservação ambiental.</p>
        </h3>

        <h2 className={`text-2xl font-bold text-[#4abe1c] pt-10 ${isVisible3&&'slide-in-text'}`}  ref={div3Ref} >VALORES:</h2>
        <h3>
          <p className={`text-xl font-semibold pt-6 ${isVisible3&&'slide-in-text-reverse'}`}>Nossa empresa preza pelo desenvolvimento de produtos provenientes de matérias primas que não prejudiquem o meio ambiente. Portamos em nossa bandeira valores inegociáveis, como a preservação da natureza, o respeito aos seres humanos e aos animais.</p>
        </h3>
      </div>
    
    </Layout>
    </div>
  )
};

export default Sobre;

