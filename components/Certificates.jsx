import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectCoverflow, EffectCube, Pagination } from "swiper";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Certificates = () => {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-8xl font-bold  text-center md:text-left">
          Certificates
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-20">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 180,
            stretch: 0,
            depth: 1000,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper certificates"
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
            waitForTransition: true,
          }}
        >
          <SwiperSlide className="certificate">
            <img src={"/certificate/front-end.jpg"} alt="Birkan Dogan" />
          </SwiperSlide>
          <SwiperSlide className="certificate">
            <img src={"/certificate/react.jpg"} alt="Birkan Dogan" />
          </SwiperSlide>
          <SwiperSlide className="certificate">
            <img src={"/certificate/javascript.jpg"} alt="Birkan Dogan" />
          </SwiperSlide>
          <SwiperSlide className="certificate">
            <img src={"/certificate/htmlcss.jpg"} alt="Birkan Dogan" />
          </SwiperSlide>
          <SwiperSlide className="certificate">
            <img src={"/certificate/gitgithub.jpg"} alt="Birkan Dogan" />
          </SwiperSlide>
          <SwiperSlide className="certificate">
            <img src={"/certificate/itf.png"} alt="Birkan Dogan" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Certificates;
