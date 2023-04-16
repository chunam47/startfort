import Image from "next/image";
import Layout from "@/layouts";
import HomeContainer from "@containers/HomeContainer";
import MoreContainer from "../containers/More";
import StarfortLaunchpad from "../containers/StarfortLaunchpad";
import Dex from "../containers/Dex";
import Staking from "../containers/Staking";
import Backed from "../containers/Backed";
import Roadmap from "../containers/Roadmap";

export default function Home() {
  return (
    <>
      <Layout title="Start Fort" description="" showFooter>
        <HomeContainer />
        <MoreContainer />
        <StarfortLaunchpad />
        <Dex />
        <Staking />
        <Backed />
        <Roadmap />
      </Layout>
    </>
  );
}
