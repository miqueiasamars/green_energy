import { useState } from "react";
import { IconAlerta, IconCheckBox, IconCopia } from "./icons";
import Image from "next/image";

type Props = {
  clickmodal: () => void;
 id: string;
 tipo: string;
 nome: string  
}

export default function ModalDelete({clickmodal, id, tipo, nome}: Props) {

  console.log(id, tipo, nome)

const [load, setLoad] = useState<boolean>(false) 

const anviarApi = async () =>{
  setLoad(true)
  

}

return (
<div>
                
<div className="fixed inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
   
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
   
    <div className="relative inline-block align-bottom rounded-lg bg-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
      
      <div className="bg-white px-4 py-3 sm:px-6">
      {!load?
      <>
      <div className="flex justify-end cursor-default"><a onClick={clickmodal} className="text-2xl font-semibold border border-black px-2 rounded-md hover:bg-[#f1f1f1]">X</a></div>
      <div className="mt-6 font-semibold text-center flex justify-center text-red-600">{IconAlerta}</div>
      <div className="mt-6 font-semibold text-center">Basta clicar em confirma para deletar o {tipo}</div> 
      {<div className="text-center py-4 font-semibold text-[#209520]">{nome}</div>}
      <div className="w-full mt-6 mb-10 flex gap-2 items-center justify-center">
      <div onClick={anviarApi} className="bg-red-400 cursor-pointer px-3 py-1 hover:transition delay-150 hover:-translate-y-1 hover:scale-110 hover:text-[#c5e2de] duration-300 rounded-md border border-[#292929]">  
        <p className='text-black font-semibold'>CONFIRMA</p>                          
        </div>
      </div> 
      </>
      :
      <>
      <div className="flex justify-center mb-10">
       <Image                
        src={'/Load.svg'}
        width={100}
        height={100}
        alt="Produtos-copps"
        className={`cursor-not-allowed animate-spin rotate-90 rounded-lg`}/>
      </div>
      </>
      } 

      </div>
      
    </div>
  </div>
</div>

</div>
)
}