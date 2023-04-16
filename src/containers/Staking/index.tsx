import React from "react";
import BlockContent from "../../components/BlockContent";
import Image from "next/image";
import img from "@assets/img/img-staking.svg";
import img1 from "@assets/img/staking-1.svg";
import img2 from "@assets/img/staking-2.svg";
import Partner from "../Partner";

const Staking = () => {
  return (
    <React.Fragment>
      <div className="relative pt-24">
        <div className="bg-staking-container"></div>
        <BlockContent className="pb-24 staking-container">
          <div className="flex flex-col justify-center items-center staking-container__title">
            <h2 className="text-[40px] font-[700] text-[#21294D] leading-[52px] capitalize">
              Staking and Yield Farming
            </h2>
            <span className="text-[#797979] font-[400] text-[20px] leading-[26px]">
              Unlock the full power of the STARFORT ecosystem through staking
            </span>
          </div>
          <div className="pt-14 relative pb-24 flex staking-container__content">
            <Image
              alt=""
              src={img}
              className="staking-container__content--img relative z-[1]"
            />
            <div className="staking-container__content--items bg-[#EEF1F7] flex py-5 px-24 z-[2] absolute bottom-[180px] left-[430px]">
              <div className="flex flex-col items-center gap-4 justify-center">
                <Image alt="" src={img1} />
                <div className="flex flex-col gap-2 items-center justify-center">
                  <span className="title-responsive font-[600] text-[24px] text-[#29387F] text-center leading-8">
                    LP farms and single asset staking
                  </span>
                  <span className="font-[400] text-[16px] leading-5 text-[#21294D] text-center">
                    Easy to set up incentives for token holders
                  </span>
                </div>
              </div>
              <hr className="w-[1px] h-[229px] bg-[#21294D] mx-16" />
              <div className="flex flex-col items-center gap-4 justify-center">
                <Image alt="" src={img1} />
                <div className="flex flex-col gap-2 items-center justify-center">
                  <span className="title-responsive font-[600] text-[24px] text-[#29387F] text-center leading-8">
                    LP farms and single asset staking
                  </span>
                  <span className="font-[400] text-[16px] leading-5 text-[#21294D] text-center">
                    Easy to set up incentives for token holders
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[100px] right-0 flex items-center w-full staking-container__content--button">
              <span className="bg-[#797979] w-full h-[1px]"></span>
              <button className="glow-on-hover bg-[#21294D] px-3 py-4 text-white w-[157px]">
                Go to Farms
              </button>
            </div>
          </div>
          <Partner />
        </BlockContent>
      </div>
    </React.Fragment>
  );
};

export default Staking;
