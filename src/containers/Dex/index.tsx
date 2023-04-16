import React from "react";
import BlockContent from "../../components/BlockContent";
import BlockItem from "../../components/BlockItem";
import img from "@assets/img/img-dex.svg";
import img1 from "@assets/img/dex-1.svg";
import img2 from "@assets/img/dex-2.svg";
import img3 from "@assets/img/dex-3.svg";
import img4 from "@assets/img/dex-4.svg";
import Image from "next/image";

const Dex = () => {
  const data = [
    {
      img: img1,
      title: "Private SHO",
      decs: "Buying minium 250 STF and staking gives acces to private SHO's. More you stake, your winning chances multiply,",
    },
    {
      img: img2,
      title: "Venture Staking",
      decs: "Enjoy staking on non-inflationary assets",
    },
    {
      img: img3,
      title: "Community Launchpad",
      decs: "Vote for startups and win guaranteed allocations.",
    },
    {
      img: img4,
      title: "Govermance",
      decs: "Take part in STF ecosystem",
    },
  ];
  return (
    <React.Fragment>
      <div className="bg-[#E9F3FB] pt-24 pb-[14rem] relative root-dex">
        <BlockContent className="dex-container ">
          <div className="pb-10 dex-container__title">
            <h2 className="mb-1 text-[40px] font-[700] text-[#21294D] leading-[52px] capitalize">
              Starfort DEX
            </h2>
            <span className="text-[#797979] desc-title font-[400] text-[20px] leading-[26px]">
              Unlock the full power of the STARFORT ecosystem through staking
            </span>
          </div>
          <div className="grid grid-cols-2 gap-5 dex-container__content ">
            <div>
              <div className="flex flex-col gap-6">
                {data.map((item, index) => (
                  <BlockItem
                    img={item.img}
                    decs={item.decs}
                    title={item.title}
                    key={index}
                    colorTitle="#21294D"
                    colorDecs="#21294D"
                  />
                ))}
              </div>
              <div className="mt-8 flex gap-4 ml-12 dex-container__content--button">
                <button className="glow-on-hover p-3 bg-[#21294D] text-white text-[16px] font-semibold leading-5">
                  Start Staking STF
                </button>
                <button className="glow-on-hover p-3 bg-white text-[#070707] text-[16px] font-semibold leading-5">
                  STF SWAP
                </button>
              </div>
            </div>
            <div className="absolute right-0 top-[115px] max-w-[50%] img">
              <Image alt="" src={img} height={735} />
            </div>
          </div>
        </BlockContent>
      </div>
    </React.Fragment>
  );
};

export default Dex;
