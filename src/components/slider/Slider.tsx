import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function MySlider() {

  return (
  <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  pagination={{ clickable: true }}
  autoplay={{ delay: 4000, disableOnInteraction: false }}
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
            <div className="text-2xl text-center text-[#30261D] custom-font-Jost">Custos reduzidos no armazenamento e no transporte, devido a alta densidade do produto.</div>         
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
            <div className="text-2xl text-center text-[#30261D] custom-font-Jost">E um combustível ecologicamente correto, limpo e muito eficiente.</div>         
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
            <div className="text-2xl text-center text-[#30261D] custom-font-Jost">O baixo teor de umidade do produto faz com que seu alto poder calorífico tenha grande eficiência energética.</div>         
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
            <div className="text-2xl text-center text-[#30261D] custom-font-Jost">Sua fabricação é proveniente de uma única matéria prima, dispensando o uso de produtos químicos.</div>         
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
            <div className="text-2xl text-center text-[#30261D] custom-font-Jost">Por não prejudicar o meio ambiente, tem o uso liberado pelo IBMA (Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis).</div>         
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
            <div className="text-2xl text-center text-[#30261D] custom-font-Jost">Redução na emissão de fumaça, liberando menos dióxido de carbono do que os combustíveis fósseis.</div>         
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
            <div className="text-2xl text-center text-[#30261D] custom-font-Jost">E uma energia renovável proveniente de matéria prima que seria descartada na natureza.</div>         
          </div>
        </div>

        {/* Paginado */}
        <div className="swiper-pagination"></div>
  </SwiperSlide>

  {/* mais slides aqui */}

</Swiper>

  )
}
