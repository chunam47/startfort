import React from "react";
import BlockContent from "../../components/BlockContent";
import img from "@assets/img/img-starfort-launchpad.svg";
import img2 from "@assets/img/img-starfort-launchpad-1.svg";
import img3 from "@assets/img/img-starfort-launchpad-2.svg";
import Image from "next/image";
import BlockItem from "../../components/BlockItem";

const StarfortLaunchpad = () => {
  return (
    <React.Fragment>
      <div className="pt-24 starfort-launchpad-container">
        <BlockContent className="flex flex-col justify-center items-center">
          <h2 className="text-[40px] text-center font-[700] text-[#21294D] leading-[52px] capitalize">
            Starfort Launchpad
          </h2>
          <span className="desc-title text-[#797979] font-[400] text-[20px] leading-[26px]">
            Access Starfort Exchange incubation project, top tier sale & NFT
            projects before they hit the maket.
          </span>
        </BlockContent>
        <div className="pt-14 relative pb-24 starfort-launchpad-container__content">
          <div className="bg-starfort-launchpad"></div>
          <BlockContent className="relative content">
            <Image src={img} alt="" className="img-content" />
            <div className="starfort-launchpad-container__content--items bg-[#29387F] px-28 pt-24 pb-12 flex flex-col justify-center items-center absolute z-[1] mr-5 bottom-[100px] left-[400px]">
              <div className="relative mb-6">
                <BlockItem
                  img={img2}
                  title="Public SHO"
                  decs="Public SHOs allow anyone with more than $500 USD worth of tokens in their wallets to participate"
                />
              </div>
              <div className="relative">
                <BlockItem
                  img={img3}
                  title="Private SHO"
                  decs="Stake minimum 250 STF to access private SHOs with higher winning chances and larger allocation sizes"
                />
                <div className="mt-8 flex gap-4 ml-12 starfort-launchpad-container__content--button">
                  <button className="glow-on-hover p-3 bg-[#070707] text-white text-[16px] font-semibold leading-5">
                    StarFort Launchpad
                  </button>
                  <button className="glow-on-hover p-3 bg-white text-[#070707] text-[16px] font-semibold leading-5">
                    How to participate
                  </button>
                </div>
              </div>
            </div>
          </BlockContent>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StarfortLaunchpad;
