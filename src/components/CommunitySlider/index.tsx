import { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export function CommunitySlider({ testimonials }) {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={32}
      centeredSlides={true}
      grabCursor={true}
      modules={[]}
      className='communitySlider'
    >
      {testimonials.map((testimonial: any, i) => {
        // destructuring the testimonial object
        const { name, image, message } = testimonial;
        return (
          <SwiperSlide key={i}>
            <div className='relative'>
              {/* image */}
              <div>
                <img src={image} alt='' />
              </div>
              {/* message & name */}
              <div className='absolute bottom-[30px] p-[20px] text-white text-center'>
                <div className='mb-8 italic text-lg font-light'>
                  {message}</div>
                <div className='flex items-center justify-center gap-x-[3px]'>
                  <span className='text-[30px] text-primary-200 font-bold'>~</span>
                  <div className='text-[20px] font-bold'>{name}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
