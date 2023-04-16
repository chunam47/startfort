import React from "react";
import eth from "@assets/img/eth.svg";
import polygon from "@assets/img/polygon.svg";
import bnb from "@assets/img/bnb.svg";
import canto from "@assets/img/canto.svg";
import Image from "next/image";
import useMediaQuery from "../../hook/useMedia";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";

const Partner = () => {
  const pagination = {
    clickable: true,
  };
  const matches = useMediaQuery("(max-width: 501px)");

  return (
    <React.Fragment>
      <div className="flex flex-col items-center justify-center pb-10 ">
        <h2 className="text-[40px] font-[700] text-[#21294D] leading-[52px] capitalize">
          Our Partner
        </h2>
        <span className="text-[#797979] font-[400] text-[20px] leading-[26px]">
          Our great partners
        </span>
      </div>

      {matches ? (
        <SwiperComponent
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mt-6 swiper-pagination-custom"
        >
          <>
            <SwiperSlide className="swiper-custom flex justify-center items-center">
              <Image alt="" src={eth} />
            </SwiperSlide>
            <SwiperSlide className="swiper-custom flex justify-center items-center">
              <Image alt="" src={polygon} />
            </SwiperSlide>
            <SwiperSlide className="swiper-custom flex justify-center items-center">
              <Image alt="" src={bnb} />
            </SwiperSlide>
            <SwiperSlide className="swiper-custom flex justify-center items-center">
              <Image alt="" src={canto} />
            </SwiperSlide>
            <SwiperSlide className="swiper-custom flex justify-center items-center">
              <Image alt="" src={canto} />
            </SwiperSlide>
            <SwiperSlide className="swiper-custom flex justify-center items-center">
              <Image alt="" src={eth} />
            </SwiperSlide>
            <SwiperSlide className="swiper-custom flex justify-center items-center">
              <Image alt="" src={polygon} />
            </SwiperSlide>
          </>
        </SwiperComponent>
      ) : (
        <div className="flex flex-col gap-6 justify-center items-center partner-container__content">
          <div className="flex gap-6 mb-2 flex-wrap justify-center items-center">
            <Image alt="" src={eth} />
            <Image alt="" src={polygon} />
            <Image alt="" src={bnb} />
            <Image alt="" src={canto} />
            <Image alt="" src={canto} />
            <Image alt="" src={eth} />
            <Image alt="" src={polygon} />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Partner;
