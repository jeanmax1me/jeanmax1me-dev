"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/app/components/ui/3d-card";
import Link from "next/link";
import booki from "@/app/images/booki.png";
import css from "@/app/images/css.svg";
import html from "@/app/images/html.svg";
import figma from "@/app/images/figma.svg";

export default function Booki() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="group/card relative  h-auto w-auto rounded-xl border border-white/[0.2] bg-black/40 p-6 hover:shadow-2xl hover:shadow-emerald-500/[0.1]">
        <CardItem translateZ="50" className="text-xl font-bold text-white">
          Booki
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="mt-2 max-w-sm text-sm text-neutral-300"
        >
          Home rentals app
        </CardItem>
        <CardItem translateZ="100" className="mt-4 w-full">
          <Image
            src={booki}
            height="1000"
            width="1000"
            className="h-40 w-full rounded-xl object-cover group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="mt-10 flex items-center justify-between">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://github.com/jeanmax1me/OC-Booki-"
            target="__blank"
            className="rounded-xl px-4 py-2 text-xs font-normal text-white"
          >
            Github →
          </CardItem>
          <CardItem>
            <div className="flex flex-wrap gap-2 rounded-lg bg-neutral-900 p-2">
              <Image src={html} width={24} height={24} alt="html logo" />
              <Image src={css} width={24} height={24} alt="css logo" />
              <Image src={figma} width={24} height={24} alt="figma logo" />
            </div>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
