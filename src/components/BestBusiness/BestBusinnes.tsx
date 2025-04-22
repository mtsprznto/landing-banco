"use client";

import Link from "next/link";
import BackgroundRadialLeft from "../BackgroundRadialLeft/BackgroundRadialLeft";
import Reveal from "../Reveal/Reveal";
import { dataFeaturesBusiness } from "./BestBusiness.data";
import Image from "next/image";

const BestBusinnes = () => {
  return (
    <div className="relative px-6 py-20 md:py-64" id="features">
      <BackgroundRadialLeft></BackgroundRadialLeft>
      <div className="grid max-w-5xl mx-auto md:grid-cols-2">
        <div>
          <Reveal>
            <h2 className="text-5xl font-semibold">
              <span className="block text-blue-400">Tu haces el negocio</span>
              nosotros manejamos <br />
              el dinero
            </h2>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-10">
              Con la tarjeta de crédito adecuado, puede mejorar su vida
              financiera generando credito, obteniendo recompensas y ahorrando
              dinero. Pero con cientos de tarketas de credito en el mercado
            </p>
          </Reveal>
          <Reveal>
            <div className="my-8">
              <Link
                href="#clients"
                className="px-4 py-3 rounded-md bg-blue-400"
              >
                Elige tu plan
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="grid items-center py-5 md:p-8">
          {dataFeaturesBusiness.map(({ id, icon, title, description }) => (
            <Reveal key={id}>
              <div className="grid grid-flow-col gap-5 px-4 py-2 rounded-3xl group hover:bg-blue-400">
                <Image src={`/assets/${icon}.png`} alt={title} width={40} height={40}></Image>
                <div>
                    <h4 className="text-primary">{title}</h4>
                    <p className="text-primaryDark">{description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestBusinnes;
