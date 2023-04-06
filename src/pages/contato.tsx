
import { NextPage } from "next";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Layout from "../components/template/dashboard/Layout";
import { Context } from "../data/contexts/Context";
import { IconEmail, Icontelephone } from "../components/icons";


const Contato: NextPage = () => {

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
   
      <div className="flex justify-center items-center bg-center shadow-md shadow-[#4abe1c]/40" style={{ backgroundImage: 'url(/greenenergy_pellets.png)', height:300 }}>
             <div className="text-white text-6xl font-bold pt-4">CONTATO</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 md:px-16 lg:px-40 pt-10 ms:pt-24">
        <div className="border border-[#4abe1c] py-6 rounded-md shadow-sm">
          <p className="flex justify-center text-[#4abe1c]">{Icontelephone}</p>
          <p className="text-center mt-3 font-semibold">(81) 9 8167-0177 </p>
        </div>       
        <div className="border border-[#4abe1c] py-6 rounded-md shadow-sm">
          <p className="flex justify-center text-[#4abe1c]">{IconEmail}</p>
          <p  className="text-center mt-3 font-semibold">comercial@llconstrutora.com.br</p>      
        </div>
      </div>
      
      <div className="pt-10 sm:pt-20 px-6 md:px-16 lg:px-40">
      <div className="font-bold md:text-2xl text-[#4abe1c]">PREENCHA NOSSO FORMULÁRIO</div>
      <div className="text-md">Em breve nossa equipe entrará em contato</div>
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
    
    </Layout>
    </div>
  )
};

export default Contato;