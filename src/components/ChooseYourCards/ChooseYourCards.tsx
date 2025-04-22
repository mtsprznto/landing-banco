"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import BackgroundRadialRight from "../BackgroundRadialRight/BackgroundRadialRight";
import MotionTransition from "../MotionTransition/MotionTransition";
import Reveal from "../Reveal/Reveal";
import { EffectCards } from "swiper/modules";
import { dataCards } from "./ChooseYourCards.data";
import Image from "next/image";
import 'swiper/css'


const ChooseYourCards = () => {
  return (
    <div className="relative px-6 py-20 md:py-64" id="tarjetas">
      <BackgroundRadialRight></BackgroundRadialRight>
      <div className="block max-w-5xl mx-auto md:grid md:grid-cols-2">
        <Reveal>
          <h2 className="text-5xl font-semibold">
            Elige la tarjeta que mas
            <span className="block text-blue-300">
              se adapta a tus necesidades
            </span>
          </h2>
        </Reveal>
        <div className="px-5">
          <MotionTransition>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
            >
              {dataCards.map(({image,id})=>(
                <SwiperSlide key={id}>
                  <Image src={image} alt="Credit card" width={400} height={400} className="py-10 md:py-0"></Image>
                </SwiperSlide>
              ))}
            </Swiper>
          </MotionTransition>
        </div>
      </div>
    </div>
  );
};

export default ChooseYourCards;
