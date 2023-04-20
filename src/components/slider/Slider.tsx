import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { IconSetaCD, IconSetaED } from '../icons';
import { ChevronRight } from 'react-feather';

export default function MySlider() {

  return (
  <Swiper
  modules={[Navigation, Pagination]}
  navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
  pagination={{ clickable: true }}
  className="mySwiper"
  >
  
  <SwiperSlide>
    {/* Slide 01 */}
    <div className="mt-20">
          <img                
            src={"/greenenergy_pellets_carrosel_01.png"}
            alt="Produtos-copps"
            className={`cursor-pointer w-full`}
          />
        </div>

        {/* testes e pontinhos */}
        <div className="py-8 px-6 flex justify-center">
          <div>
            <div className="text-2xl text-center text-[#30261D] custom-font-roboto-500 py-10">Custos reduzidos no armazenamento e no transporte, devido a alta densidade do produto.</div>         
          </div>
        </div>

        {/* Paginado */}
        <div className="swiper-pagination"></div>
  </SwiperSlide>

  <SwiperSlide>
    {/* Slide 02 */}
    <div className="mt-20">
          <img                
            src={"/greenenergy_pellets_carrosel_02.png"}
            alt="Produtos-copps"
            className={`cursor-pointer w-full`}
          />
        </div>

        {/* testes e pontinhos */}
        <div className="py-8 px-6 flex justify-center">
          <div>
            <div className="text-2xl text-center text-[#30261D] custom-font-roboto-500 py-10">E um combustível ecologicamente correto, limpo e muito eficiente.</div>         
          </div>
        </div>

        {/* Paginado */}
        <div className="swiper-pagination"></div>
  </SwiperSlide>

  <SwiperSlide>
    {/* Slide 03 */}
    <div className="mt-20">
          <img                
            src={"/greenenergy_pellets_carrosel_03.png"}
            alt="Produtos-copps"
            className={`cursor-pointer w-full`}
          />
        </div>

        {/* testes e pontinhos */}
        <div className="py-8 px-6 flex justify-center">
          <div>
            <div className="text-2xl text-center text-[#30261D] custom-font-roboto-500 py-10">O baixo teor de umidade do produto faz com que seu alto poder calorífico tenha grande eficiência energética, garantindo o melhor desempenho dos equipamentos de queima.</div>         
          </div>
        </div>

        {/* Paginado */}
        <div className="swiper-pagination"></div>
  </SwiperSlide>

  <SwiperSlide>
    {/* Slide 04 */}
    <div className="mt-20">
          <img                
            src={"/greenenergy_pellets_carrosel_04.png"}
            alt="Produtos-copps"
            className={`cursor-pointer w-full`}
          />
        </div>

        {/* testes e pontinhos */}
        <div className="py-8 px-6 flex justify-center">
          <div>
            <div className="text-2xl text-center text-[#30261D] custom-font-roboto-500 py-10">Sua fabricação é proveniente de uma única matéria prima, dispensando o uso de produtos químicos.</div>         
          </div>
        </div>

        {/* Paginado */}
        <div className="swiper-pagination"></div>
  </SwiperSlide>

  <SwiperSlide>
    {/* Slide 05 */}
    <div className="mt-20">
          <img                
            src={"/greenenergy_pellets_carrosel_05.png"}
            alt="Produtos-copps"
            className={`cursor-pointer w-full`}
          />
        </div>

        {/* testes e pontinhos */}
        <div className="py-8 px-6 flex justify-center">
          <div>
            <div className="text-2xl text-center text-[#30261D] custom-font-roboto-500 py-10">Por não prejudicar o meio ambiente, tem o uso liberado pelo IBMA (Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis).</div>         
          </div>
        </div>

        {/* Paginado */}
        <div className="swiper-pagination"></div>
  </SwiperSlide>

  <SwiperSlide>
    {/* Slide 06 */}
    <div className="mt-20">
          <img                
            src={"/greenenergy_pellets_carrosel_06.png"}
            alt="Produtos-copps"
            className={`cursor-pointer w-full`}
          />
        </div>

        {/* testes e pontinhos */}
        <div className="py-8 px-6 flex justify-center">
          <div>
            <div className="text-2xl text-center text-[#30261D] custom-font-roboto-500 py-10">Redução na emissão de fumaça, liberando menos dióxido de carbono do que os combustíveis fósseis.</div>         
          </div>
        </div>

        {/* Paginado */}
        <div className="swiper-pagination"></div>
  </SwiperSlide>

  <SwiperSlide>
    {/* Slide 07 */}
    <div className="mt-20">
          <img                
            src={"/greenenergy_pellets_carrosel_07.png"}
            alt="Produtos-copps"
            className={`cursor-pointer w-full`}
          />
        </div>

        {/* testes e pontinhos */}
        <div className="py-8 px-6 flex justify-center">
          <div>
            <div className="text-2xl text-center text-[#30261D] custom-font-roboto-500 py-10">E uma energia renovável proveniente de matéria prima que seria descartada na natureza.</div>         
          </div>
        </div>

        {/* Paginado */}
        <div className="swiper-pagination"></div>
  </SwiperSlide>

  {/* mais slides aqui */}

  {/* botões de navegação */}
  <div className='-mt-14'>
  <div className="swiper-button-next text-white font-bold py-8 px-6 rounded -mr-3"> 
  <ChevronRight size={5} />
  </div>
  <div className="swiper-button-prev text-white font-bold py-8 px-6 rounded -ml-3">   
   <ChevronRight size={5} />
  </div>
  </div>
</Swiper>

  )
}
