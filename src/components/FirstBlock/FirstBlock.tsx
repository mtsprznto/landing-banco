"use client";
import Link from "next/link";
import BackgroundRadialLeft from "../BackgroundRadialLeft/BackgroundRadialLeft";
import BackgroundRadialRight from "../BackgroundRadialRight/BackgroundRadialRight";
import MotionTransition from "../MotionTransition/MotionTransition";
import Image from "next/image";
import Reveal from "../Reveal/Reveal";

const FirstBlock = () => {
  return (
    <div className="relative p-4 md:py-40">
      <BackgroundRadialRight></BackgroundRadialRight>
      <div className="grid max-w-5xl mx-auto md:grid-cols-2">
        <div>
          <Reveal>
            <h1 className="text-5xl font-semibold">
              El Nuevo
              <span className="block degradedBlue bg-blue-200">
                Banco Digital
              </span>
              para todos
            </h1>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-10">
              Nuestro equipo de expertos utilizxa euna metodologia para
              identificar las tarjetas de credito que probablemente se ajusten a
              sus necesidades. Examinamos tasas porcentuales anuales, tarigas
              anuales.
            </p>
          </Reveal>
          <Reveal>
            <div className="my-8">
              <Link
                href="#clients"
                className="px-4 py-3 rounded-md bg-blue-500"
              >
                Empieza ahora
              </Link>
            </div>
          </Reveal>
        </div>
        <MotionTransition className="flex items-center justify-center">
          <Image
            src={"/assets/cards-block.png"}
            alt="card"
            width={450}
            height={450}
            className="h-auto w-72 md:w-full"
          ></Image>
        </MotionTransition>
      </div>
      <BackgroundRadialLeft></BackgroundRadialLeft>
    </div>
  );
};

export default FirstBlock;
