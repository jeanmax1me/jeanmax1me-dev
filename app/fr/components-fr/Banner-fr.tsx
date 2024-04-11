"use client";

import React from "react";
import Image from "next/image";

const Banner: React.FC<{}> = () => {
  return (
    <div className="z-[20] mt-[150px] flex flex-row items-center justify-center px-20 ">
      <div className="flex flex-col  justify-center  text-center">
        <div className="flex justify-center">
          <Image
            priority
            src="/Me.png"
            height={300}
            width={300}
            alt="jeanmax1me avatar"
            className="rounded-full"
          />
        </div>

        <div className="mt-6 flex h-auto w-auto max-w-[600px] animate-bounce cursor-pointer flex-col gap-6 text-7xl font-semibold tracking-tighter text-white">
          Bonjour!
        </div>
        <div className="flex justify-center">
          <p className="max-w-[600px] text-2xl font-medium  tracking-tighter text-gray-300">
            Bienvenue sur mon {" "}
            <span className="bg-gradient-to-r from-purple-500  to-orange-400 bg-clip-text font-semibold text-transparent">
              Portfolio
            </span>
          </p>
          <Image src="/popcorn.gif" height={50} width={50} alt="popcorn" />
        </div>

        <p className="text-md my-5 max-w-[600px] text-gray-200">
        Je suis un développeur JavaScript français passionné, spécialisé dans React.js et Next.js. Je me consacre à la création de pages web élégantes et pratiques pour les utilisateurs.
        </p>
        <div className="text-md flex justify-center">
          <button
            onClick={() => window.open("mailto:jeanmaximegilbert@gmail.com")}
            className=" padding-20     z-[1]  rounded-3xl border-[0.1px]  border-white px-10 py-3 font-semibold text-white  hover:border-transparent hover:bg-white hover:text-black "
          >
            Me contacter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
