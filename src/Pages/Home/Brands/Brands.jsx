import casio from '../../../assets/brands/casio.png'
import amazon from '../../../assets/brands/amazon_vector.png'
import moonstar from '../../../assets/brands/moonstar.png'
import star from '../../../assets/brands/star.png'
import starPeople from '../../../assets/brands/start_people.png'
import randstad from '../../../assets/brands/randstad.png'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
const Brands = () => {






  const brands = [
    { id: 1, image: casio, alt: 'Casio' },
    { id: 2, image: amazon, alt: 'Amazon' },
    { id: 3, image: moonstar, alt: 'Moonstar' },
    { id: 4, image: star, alt: 'Star' },
    { id: 5, image: starPeople, alt: 'StartPeople' },
    { id: 6, image: randstad, alt: 'Randstad' }
  ];

    return (

            <section className="bg-gray-100 px-6 py-16 md:px-8 md:py-20 mt-12.5 ">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
          We've helped thousands of sales teams
        </h2>
 
<Swiper
slidesPerView={4}
        spaceBetween={15}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
                modules={[Autoplay]}

                autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
>
<div className="flex  flex-wrap justify-center items-center gap-8 md:gap-12">
          {brands.map((brand) => (
            <SwiperSlide
              key={brand.id}
              className="flex items-center justify-center h-20 px-4"
            >
              <img
                src={brand.image}
                alt={brand.alt}
                className="h-full object-contain max-w-[120px]"
              />
            </SwiperSlide>
          ))}
        </div>
</Swiper>

        
      </div>
    </section>


    );
};

export default Brands;