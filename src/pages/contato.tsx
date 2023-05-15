
import { NextPage } from "next";
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
   
      <div className="mt-20 sm:mt-0 ">
        <img className="shadow-md shadow-[#3A881B]/40" alt="" src="/greenenergy_pellets_carrosel_09_md.png"  />
      </div>  

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 md:px-16 lg:px-40 pt-10">
        <div className="border border-[#3A881B] py-6 rounded-md shadow-sm">
          <p className="flex justify-center text-[#3A881B]">{Icontelephone}</p>
          <p className="text-center mt-3 font-semibold">( 41 ) 9 9769-7540 </p>
        </div>       
        <div className="border border-[#3A881B] py-6 rounded-md shadow-sm">
          <p className="flex justify-center text-[#3A881B]">{IconEmail}</p>
          <p  className="text-center pt-3 font-semibold">jordane.silva@greenenergypellets.com.br</p> 
          <p  className="text-center pt-3 font-semibold">raquel.sanagiotto@greenenergypellets.com.br</p>      
        </div>
      </div>
      
      <div className="pt-10 px-6 md:px-16 lg:px-40">
      <div className="font-bold md:text-2xl text-[#3A881B]">PREENCHA NOSSO FORMULÁRIO</div>
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
          className={`bg-[#fff] flex-1 rounded-md appearance-none px-3 py-2 border border-[#3A881B] placeholder-[#969595] text-gray-900 focus:outline-none focus:border-1 focus:border-[#67ff2b] focus:z-10`}
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
              className={`bg-[#fff] flex-1 rounded-md appearance-none px-3 py-2 border border-[#3A881B] placeholder-[#969595] text-gray-900 focus:outline-none focus:border-1 focus:border-[#67ff2b] focus:z-10`}
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
              className={`bg-[#fff] flex-1 rounded-md appearance-none px-3 py-2 border border-[#3A881B] placeholder-[#969595] text-gray-900 focus:outline-none focus:border-1 focus:border-[#67ff2b] focus:z-10`}
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
          className={`bg-[#fff] flex-1 rounded-md appearance-none px-3 py-2 border border-[#3A881B] placeholder-[#969595] text-gray-900 focus:outline-none focus:border-1 focus:border-[#67ff2b] focus:z-10`}
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
          className={`bg-[#fff] flex-1 h-36 rounded-md appearance-none px-3 py-2 border border-[#3A881B] placeholder-[#969595] text-gray-900 focus:outline-none focus:border-1 focus:border-[#67ff2b] focus:z-10`}
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