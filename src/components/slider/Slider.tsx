import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from 'react';

export default function MySlider() {

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

  return (
  <div className=''>
  <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  pagination={{ clickable: true }}
  autoplay={{ delay: 6000, disableOnInteraction: false }}
  className="mySwiper">
  
  <SwiperSlide>
  {/* Slide 01 */}
  <div className="mt-20 md:mt-0 shadow-md">
    {tela>=768?         
    <div className=''>
      <img
        src={"/greenenergy_pellets_carrosel_01_md.png"}
        alt="Descrição da imgm"
        className={`cursor-pointer w-full`}
      />
    </div>
    :
    <img                
      src={"/greenenergy_pellets_carrosel_01.png"}
      alt="Produtos-copps"
      className={`cursor-pointer w-full`}
    />}
  </div>

  {/* testes e pontinhos */}
  <div className="py-16 md:py-7 px-6 flex justify-center">
    <div className=''>
      <div className="text-3xl text-center text-[#30261D] custom-font-libre-bodoni">Custos reduzidos no armazenamento e no transporte, devido a alta densidade do produto.</div>         
    </div>
  </div>

  {/* Paginado */}
  {/* <div className="swiper-pagination"></div> */}
  </SwiperSlide>

  <SwiperSlide>
  {/* Slide 02 */}
  <div className="mt-20 md:mt-0 shadow-md">
    { tela>=768?
      <img                
        src={"/greenenergy_pellets_carrosel_02_md.png"}
        alt="Produtos-copps"
        className={`cursor-pointer w-full`}
      />:
      <img                
        src={"/greenenergy_pellets_carrosel_02.png"}
        alt="Produtos-copps"
        className={`cursor-pointer w-full`}
  />}
  </div>

  {/* testes e pontinhos */}
  <div className="py-20 md:py-7 px-6 flex justify-center">
    <div>
      <div className="text-3xl text-center text-[#30261D] custom-font-libre-bodoni">E um combustível ecologicamente correto, limpo e muito eficiente.</div>         
    </div>
  </div>

  {/* Paginado */}
  {/* <div className="swiper-pagination"></div> */}
  </SwiperSlide>

<SwiperSlide>
{/* Slide 03 */}
<div className="mt-20 md:mt-0 shadow-md">
      {tela>=768?
      <img                
        src={"/greenenergy_pellets_carrosel_03_md.png"}
        alt="Produtos-copps"
        className={`cursor-pointer w-full`}
      />:
      <img                
        src={"/greenenergy_pellets_carrosel_03.png"}
        alt="Produtos-copps"
        className={`cursor-pointer w-full`}
      />
      }
    </div>

    {/* testes e pontinhos */}
    <div className="py-16 md:py-7 px-6 flex justify-center">
      <div>
        <div className="text-3xl text-center text-[#30261D] custom-font-libre-bodoni">O baixo teor de umidade do produto faz com que seu alto poder calorífico tenha grande eficiência energética.</div>         
      </div>
    </div>

    {/* Paginado */}
    {/* <div className="swiper-pagination"></div> */}
  </SwiperSlide>

  <SwiperSlide>
    {/* Slide 04 */}
    <div className="mt-20 md:mt-0 shadow-md">
    {tela>=768?
          <img                
            src={"/greenenergy_pellets_carrosel_04_md.png"}
            alt="Produtos-copps"
            className={`cursor-pointer w-full`}
          />:
          <img                
            src={"/greenenergy_pellets_carrosel_04.png"}
            alt="Produtos-copps"
            className={`cursor-pointer w-full`}
        />}
    
        </div>

        {/* testes e pontinhos */}
        <div className="py-14 md:py-7 px-6 flex justify-center">
          <div>
            <div className="text-3xl pt-2 text-center text-[#30261D] custom-font-libre-bodoni">Sua fabricação é proveniente de uma única matéria prima, dispensando o uso de produtos químicos.</div>         
          </div>
        </div>

        {/* Paginado */}
        {/* <div className="swiper-pagination"></div> */}
  </SwiperSlide>

  <SwiperSlide>
    {/* Slide 05 */}
    <div className="mt-20 md:mt-0 shadow-md">
    {tela>=768?
          <img                
            src={"/greenenergy_pellets_carrosel_05_md.png"}
            alt="Produtos-copps"
            className={`cursor-pointer w-full`}
          />:          
          <img                
            src={"/greenenergy_pellets_carrosel_05.png"}
            alt="Produtos-copps"
            className={`cursor-pointer w-full`}
        />}
        </div>

        {/* testes e pontinhos */}
        <div className="py-7 md:py-7 px-6 flex justify-center">
          <div>
            <div className="text-3xl pt-2 text-center text-[#30261D] custom-font-libre-bodoni">Por não prejudicar o meio ambiente, tem o uso liberado pelo IBAMA (Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis).</div>         
          </div>
        </div>

        {/* Paginado */}
        {/* <div className="swiper-pagination"></div> */}
  </SwiperSlide>

  <SwiperSlide>
    {/* Slide 06 */}
    <div className="mt-20 md:mt-0 shadow-md">
    {tela>=768?
          <img                
            src={"/greenenergy_pellets_carrosel_06_md.png"}
            alt="Produtos-copps"
            className={`cursor-pointer w-full`}
          />:          
          <img                
            src={"/greenenergy_pellets_carrosel_06.png"}
            alt="Produtos-copps"
            className={`cursor-pointer w-full`}
        />}
        </div>

        {/* testes e pontinhos */}
        <div className="py-16 md:py-7 px-6 flex justify-center">
          <div>
            <div className="text-3xl pt-2 text-center text-[#30261D] custom-font-libre-bodoni">Redução na emissão de fumaça, liberando menos dióxido de carbono do que os combustíveis fósseis.</div>         
          </div>
        </div>

        {/* Paginado */}
        {/* <div className="swiper-pagination"></div> */}
  </SwiperSlide>

  <SwiperSlide>
    {/* Slide 07 */}
    <div className="mt-20 md:mt-0 shadow-md">
    {tela>=768?
          <img                
            src={"/greenenergy_pellets_carrosel_07_md.png"}
            alt="Produtos-copps"
            className={`cursor-pointer w-full`}
          />:
          <img                
            src={"/greenenergy_pellets_carrosel_07.png"}
            alt="Produtos-copps"
            className={`cursor-pointer w-full`}
          />}
        </div>

        {/* testes e pontinhos */}
        <div className="py-16 md:py-7 px-6 flex justify-center">
          <div>
            <div className="text-3xl pt-2 text-center text-[#30261D] custom-font-libre-bodoni">E uma energia renovável proveniente de matéria prima que seria descartada na natureza.</div>         
          </div>
        </div>

        {/* Paginado */}
        <div className="swiper-pagination"></div>
  </SwiperSlide>

</Swiper>
</div>
  )
}
