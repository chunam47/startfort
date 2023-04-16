import React from "react";
import BlockContent from "@components/BlockContent";
import Image from "next/image";
import more1 from "@assets/img/more1.svg";
import more2 from "@assets/img/more2.svg";
import more3 from "@assets/img/more3.svg";
import more4 from "@assets/img/more4.svg";
import useMediaQuery from "../../hook/useMedia";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

const MoreContainer = () => {
  const data = [
    {
      img: more1,
      desc: "Starfort Launchpad",
    },
    {
      img: more2,
      desc: "Starford DEX",
    },
    {
      img: more3,
      desc: "Staking",
    },
    {
      img: more4,
      desc: "Yield Farminging",
    },
  ];
  const pagination = {
    clickable: true,
  };
  const matches = useMediaQuery("(max-width: 501px)");

  return (
    <React.Fragment>
      <BlockContent className="pt-24 more-container">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[40px] text-center font-[700] text-[#21294D] leading-[52px] capitalize">
            More than a launchpad
          </h2>
          <span className="desc-title text-[#797979] font-[400] text-[20px] leading-[26px]">
            At Starford Exchange we bring great solutions to our users everyday.
            Discover our lastes products.
          </span>
        </div>
        {matches ? (
          <SwiperComponent
            className="mt-6"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
          >
            <div className="">
              {data.map((item, index) => (
                <>
                  <SwiperSlide key={index}>
                    <div
                      key={index}
                      className="bg-[#FEFFFF] flex flex-col gap-[29px] items-center justify-center py-11 border-[#DFE5F7] border-solid border-[1px]"
                    >
                      <Image alt="" src={item.img} />
                      <span className="text-[#21294D] text-[20px] font-[500] text-center">
                        {item.desc}
                      </span>
                    </div>
                  </SwiperSlide>
                </>
              ))}
            </div>
          </SwiperComponent>
        ) : (
          <div className="grid grid-cols-4 gap-6 pt-10 more-container__content">
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-[#FEFFFF] flex flex-col gap-[29px] items-center justify-center py-11 border-[#DFE5F7] border-solid border-[1px]"
              >
                <Image alt="" src={item.img} />
                <span className="text-[#21294D] text-[20px] font-[500] w-[40%] text-center">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        )}
      </BlockContent>
    </React.Fragment>
  );
};

export default MoreContainer;
