import React from "react";
import BlockContent from "../../components/BlockContent";
import gmx from "@assets/img/gmx.svg";
import gamelot from "@assets/img/gamelot.svg";
import coredao from "@assets/img/coredao.svg";
import Image from "next/image";
import useMediaQuery from "../../hook/useMedia";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

const Backed = () => {
  const pagination = {
    clickable: true,
  };
  const matches = useMediaQuery("(max-width: 501px)");

  return (
    <React.Fragment>
      <div className="bg-[#E9F3FB]">
        <BlockContent className="py-10 relative">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-[40px] font-[700] text-[#21294D] leading-[52px] capitalize">
              Backed
            </h2>
            <span className="text-[#797979] font-[400] text-[20px] leading-[26px]">
              Prestigious backed system in the market
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
                  <Image alt="" src={gmx} />
                </SwiperSlide>
                <SwiperSlide className="swiper-custom flex justify-center items-center">
                  <Image alt="" src={gamelot} />
                </SwiperSlide>
                <SwiperSlide className="swiper-custom flex justify-center items-center">
                  <Image alt="" src={coredao} />
                </SwiperSlide>
              </>
            </SwiperComponent>
          ) : (
            <div className="flex gap-12 justify-center items-center mt-6 flex-wrap">
              <Image alt="" src={gmx} />
              <Image alt="" src={gamelot} />
              <Image alt="" src={coredao} />
            </div>
          )}
        </BlockContent>
      </div>
    </React.Fragment>
  );
};

export default Backed;
