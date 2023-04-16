import Image from "next/image";
import React from "react";
import img from "@assets/img/logo-footer.svg";
import BlockContent from "../components/BlockContent";
export default function Footer() {
  const data = [
    {
      title: "Product",
      desc: [
        {
          title: "DAO Launchpad",
          url: "/",
        },
        {
          title: "Stake DAO",
          url: "/",
        },
        {
          title: "Community Voted",
          url: "/",
        },
        {
          title: "Farms and Vesting",
          url: "/",
        },
        {
          title: "Buy Dao",
          url: "/",
        },
        {
          title: "DAO Swap",
          url: "/",
        },
        {
          title: "Govermance",
          url: "/",
        },
      ],
    },
    {
      title: "Resource",
      desc: [
        {
          title: "Blog",
          url: "/",
        },
        {
          title: "FAQ",
          url: "/",
        },
        {
          title: "Sitemap",
          url: "/",
        },
        {
          title: "DAO Bridge",
          url: "/",
        },
      ],
    },
    {
      title: "Social",
      desc: [
        {
          title: "Twitter",
          url: "/",
        },
        {
          title: "Telegram",
          url: "/",
        },
        {
          title: "Instagram",
          url: "/",
        },
        {
          title: "TikTok",
          url: "/",
        },
        {
          title: "Youtube",
          url: "/",
        },
        {
          title: "Discord",
          url: "/",
        },
      ],
    },
    {
      title: "Legal",
      desc: [
        {
          title: "Terms",
          url: "/",
        },
        {
          title: "Privacy",
          url: "/",
        },
        {
          title: "Cookies",
          url: "/",
        },
      ],
    },
  ];
  return (
    <div className="footer">
      <div className="content-footer bg-[#21294D]">
        <BlockContent className="flex justify-around pt-14 pb-20 content-footer__content items-center">
          <div>
            <Image src={img} alt="" />
          </div>
          <div className="flex gap-16 flex-wrap content-footer__content--item">
            {data.map((item, index) => (
              <div key={index} className="flex flex-col gap-6 ">
                <h2 className="text-white text-[16px] leading-5 font-[600]">
                  {item.title}
                </h2>
                <div className="flex flex-col gap-1">
                  {item.desc.map((item, index) => (
                    <a
                      href={item.url}
                      key={index}
                      className="text-white text-[16px] leading-5 font-[400]"
                    >
                      {item.title}
                    </a>
                  ))}
                  <span></span>
                </div>
              </div>
            ))}
            <div></div>
          </div>
        </BlockContent>
      </div>
    </div>
  );
}
