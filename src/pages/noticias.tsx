
import { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import Layout from "../components/template/dashboard/Layout";
import { Context } from "../data/contexts/Context";
import { IconEmail, Icontelephone } from "../components/icons";


const Noticia: NextPage = () => {

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
        menu: '5',        
        }
    });
},[dispatch])

  return (
    <div className={`bg-[#ffffff] text-[#494949]`}>
    <Layout>
   
      
    
    </Layout>
    </div>
  )
};

export default Noticia;