// Import Swiper React components
// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
import { workouts } from '../../data';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../../../workoutSlider.css';

// import required modules
import { Autoplay, Navigation } from 'swiper';

export function WorkoutSlider() {
  const { programs } = workouts;
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={32}
      navigation={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      //grabCursor={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        720: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      modules={[Navigation, Autoplay]}
      className='workoutSlider'
    >
      {programs.map((program, i) => {
        // destructure program data
        const { image, name } = program;
        return (
          <SwiperSlide className='max-w-[320px] max-h-[320px] relative bg-purple-200' key={i}>
            <img className='w-full h-full object-cover' src={image} />
            <div className='absolute left-[20px] bottom-[20px] bg-white h-[26px] px-[14px] flex items-center rounded-[13px] font-semibold'
            >
              <div>
                {name}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper >
  );
}
