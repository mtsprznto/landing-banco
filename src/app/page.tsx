import BestBusinnes from "@/components/BestBusiness/BestBusinnes";
import ChooseYourCards from "@/components/ChooseYourCards/ChooseYourCards";
import ControlBilling from "@/components/ControlBilling/ControlBilling";
import CounterData from "@/components/CounterData/CounterData";
import FirstBlock from "@/components/FirstBlock/FirstBlock";
import Header from "@/components/Header/Header";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Header></Header>
      <FirstBlock></FirstBlock>
      <CounterData></CounterData>
      <BestBusinnes></BestBusinnes>
      <ChooseYourCards></ChooseYourCards>
      <ControlBilling></ControlBilling>
      <Testimonials></Testimonials>
    </>
  );
}
