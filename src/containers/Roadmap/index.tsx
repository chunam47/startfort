import React from "react";
import BlockContent from "../../components/BlockContent";
import star from "@assets/img/star.svg";
import Image from "next/image";
import useMediaQuery from "../../hook/useMedia";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

const Roadmap = () => {
  const data = [
    {
      title: "Phase 1",
      decs: [
        "Market research",
        "Building up relationships with partners",
        "Live website",
        "Smart contract deployment",
        "Foundation group up",
      ],
    },
    {
      title: "Phase 2",
      decs: [
        "Market research",
        "Building up relationships with partners",
        "Live website",
        "Smart contract deployment",
        "Foundation group up",
      ],
    },
    {
      title: "Phase 3",
      decs: [
        "Market research",
        "Building up relationships with partners",
        "Live website",
        "Smart contract deployment",
        "Foundation group up",
      ],
    },
    {
      title: "Phase 4",
      decs: [
        "Market research",
        "Building up relationships with partners",
        "Live website",
        "Smart contract deployment",
        "Foundation group up",
      ],
    },
  ];
  const matches = useMediaQuery("(max-width: 501px)");

  return (
    <React.Fragment>
      <div className="roadmap-container mt-24 ">
        <BlockContent className="pb-36">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-[40px] font-[700] text-[#21294D] leading-[52px] capitalize">
              Discover the roadmap
            </h2>
            <span className="text-[#797979] font-[400] text-[20px] leading-[26px]">
              Discover the project and join our journey
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
                        className="roadmap-items px-5 py-16 h-max"
                        key={index}
                      >
                        <Image alt="" src={star} />
                        <div className="mb-6 text-[#29387F] text-[24px] leading-8 font-[600]">
                          <span>{item.title}</span>
                        </div>
                        <div className="roadmap-container__content--item">
                          <ul className="list-disc pl-6">
                            {item.decs.map((item, index) => (
                              <li
                                className="text-[#797979] font-[400] text-[20px]"
                                key={index}
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                  </>
                ))}
              </div>
            </SwiperComponent>
          ) : (
            <div className="flex gap-6 mt-20 roadmap-container__content">
              {data.map((item, index) => (
                <div className="roadmap-items px-5 py-16 h-max" key={index}>
                  <Image alt="" src={star} />
                  <div className="mb-6 text-[#29387F] text-[24px] leading-8 font-[600]">
                    <span>{item.title}</span>
                  </div>
                  <div className="roadmap-container__content--item">
                    <ul className="list-disc pl-6">
                      {item.decs.map((item, index) => (
                        <li
                          className="text-[#797979] font-[400] text-[20px]"
                          key={index}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </BlockContent>
      </div>
    </React.Fragment>
  );
};

export default Roadmap;
