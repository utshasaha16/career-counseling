import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import sliderImg1 from '../../assets/slider_img_1.jpg'
import sliderImg2 from '../../assets/slider_img-2.jpg'
import sliderImg3 from '../../assets/slider_Img_3.jpg'


const Banner = () => {
  return (
    <div className="pt-10 w-[90%] mx-auto">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
            <div className="">
            <img className="w-full h-auto p-4" src={sliderImg1} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img className="w-full h-auto p-4" src={sliderImg2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="w-full h-auto p-4" src={sliderImg3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
