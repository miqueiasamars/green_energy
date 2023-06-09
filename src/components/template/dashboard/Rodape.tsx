import Image from 'next/image';
import router from 'next/router';
import { IconEmail, IconMaps, IconRelogio, IconWhatsApp, Icontelephone } from '../../icons';
import { useContext } from 'react';
import { Context } from '../../../data/contexts/Context';

export function Rodape (){

  const {state, dispatch} = useContext(Context)
  
  const status = state.dados.status


    return(

      <>
      <div className='bg-[#3A881B] pt-10 pb-10 py-4 px-2'>

      <div className=''>

      <div className='px-2 text-sm flex justify-center'>
        <div>
        {status==='1'?<div className='text-white font-semibold px-4'>Contatos</div>:
        <div className='text-white font-semibold px-4'>contacts</div>}
        {/* <div className='text-white mt-1 flex gap-4 items-center px-4'>{Icontelephone} ( 41 ) 9 9769-7540</div> */}
        <div className='text-white mt-1 flex gap-4 items-center px-4'>{IconWhatsApp} ( 41 ) 9 9769-7540</div>
        <div className='text-white mt-1 flex gap-4 items-center px-4'>{IconEmail} jordane.silva@greenenergypellets.com.br</div>
        <div className='text-white mt-1 flex gap-4 items-center px-4'>{IconEmail} raquel.sanagiotto@greenenergypellets.com.br</div>
        {/* <div className='text-white mt-3 flex gap-4 items-center'>{IconRelogio} Seg a Sexta: 8h às 17h / Sábado: 8h às 12h </div> */}
        </div>
      </div>    

      <div className='pt-10 md:flex text-white md:justify-center'>
  
      <div className=''>
      {status==='1'?<h6>Inscreva-se em nossa newsletter</h6>:
      <h6>Subscribe to our newsletter</h6>}
         {/*Nome*/}      
         <label>          
          <div className="flex shadow-sm mt-2 ">    
          <input
          // value={state.dados?.nome}
          // onChange={nomeEvento}
          type="text"
          name="name"
          id="name"
          className={`flex-1 md:w-96 bg-white rounded-md appearance-none px-3 py-1 border border-[#3A881B] placeholder-[#969595] text-gray-900 focus:outline-none focus:border-1 focus:border-[#040a02] focus:z-10`}
          placeholder="Nome"
          />        
          </div> 
        </label>

         {/*Nome Cliente */}      
         <label className=''>           
            <div className="flex shadow-sm mt-1">    
            <input
            // value={state.dados?.nome}
            // onChange={nomeEvento}
            type="text"
            name="name"
            id="name"
            className={`flex-1 bg-white rounded-md appearance-none px-3 py-1 border border-[#3A881B] placeholder-[#969595] text-gray-900 focus:outline-none focus:border-1 focus:border-[#040a02] focus:z-10`}
            placeholder="E-mail"
            />        
            </div> 
          </label>
          {status==='1'?<div className='pt-2 flex justify-end'><button className='border border-[#fff] text-white px-4'>Enviar</button></div>:
          <div className='pt-2 flex justify-end'><button className='border border-[#fff] text-white px-4'>To send</button></div>}
      </div>
      </div>

      <div className='mt-10'>
        {status==='1'?<div className='flex justify-center text-white font-extralight text-xl'><h6>Siga-nos em nossas redes sociais:</h6></div>:
        <div className='flex justify-center text-white font-extralight text-xl'><h6>Follow us on our social networks:</h6></div>}
        <div className='flex justify-center gap-4 mt-4'>          
          <div>
            <img                
            src={"/instagram.png"}         
            alt="instagram_greenenergy"
            className={`w-10`}
            />
          </div>
          <div>
            <img                
           src={"/face.png"}         
           alt="instagram_greenenergy"
           className={`w-10`}
            />
          </div>
          {/* <div>
            <img                
            src={"/youtube.png"}         
            alt="instagram_greenenergy"
            className={`w-10`}
            />
          </div>        */}
        </div>
      </div>
       
      </div>       
      </div>
      
    <div className='text-xs md:text-center bg-[#276211] px-4 py-2'>
      {status==='1'?<p className='text-white '>GREEN ENERGY LTDA © Todos os direitos reservados</p>:
      <p className='text-white '>GREEN ENERGY LTDA © All rights reserved</p>}
      <p className='text-white '>CNPJ: 30.451.857/0001-99</p> 
    </div>
    </>

    )
}

