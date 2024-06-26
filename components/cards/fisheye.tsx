"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/app/components/ui/3d-card";
import Link from "next/link";
import fisheye from "@/app/images/fisheye.png";
import css from "@/app/images/css.svg";
import html from "@/app/images/html.svg";
import figma from "@/app/images/figma.svg";
import javascript from "@/app/images/javascript.svg";
import nodejs from "@/app/images/nodejs.svg";


export default function Fisheye() {
    return (
        <CardContainer className="inter-var">
         <CardBody className="group/card relative  h-auto w-auto rounded-xl border border-white/[0.2] bg-black/40 p-6 hover:shadow-2xl hover:shadow-emerald-500/[0.1]">
            <CardItem translateZ="50" className="text-xl font-bold text-white">
              FishEye
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-sm max-w-sm mt-2 text-neutral-300"
            >
              Freelance photographers app
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={fisheye}
                height="1000"
                width="1000"
                className="h-40 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-10">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/jeanmax1me/PROJET-6"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal text-white"
              >
                Github →
              </CardItem>
              <CardItem>
              <div className="flex gap-2 p-2 rounded-lg bg-neutral-900 flex-wrap">
                <Image src={html} width={24} height={24} alt="html logo" />
                <Image src={css} width={24} height={24} alt="css logo" />
                <Image src={figma} width={24} height={24} alt="figma logo" />
                <Image src={javascript} width={24} height={24} alt="javascript logo" />
                <Image src={nodejs} width={24} height={24} alt="nodejs logo" />
                </div>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
    );
  }
  