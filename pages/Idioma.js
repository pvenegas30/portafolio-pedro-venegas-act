import React, { useState } from 'react';
import { useTranslations } from "next-intl";
import { loadMessages } from "@/helpers/loadMessages";
import Image from "next/image";
import Vzla from "../public/vzla.png";
import Usa from "../public/usa.png";
import Link from 'next/link';


function Idioma() {

  const t = useTranslations();

  return (
    <div className="flex flex-row gap-x-2 ">


      <Link href="/en" locale="en" className='p-1 bg-teal-600 rounded-full text-white'>
        <Image
          width={28}
          height={28}
          src={Usa}
          alt='usa'
          title='English'
        />
      </Link>
      <Link href="/" locale="es" className='p-1 bg-teal-600 rounded-full text-white'>
        <Image
          width={28}
          height={28}
          src={Vzla}
          alt='usa'
          title='Español'
        />
      </Link>
    </div>
  );
}

export default Idioma;

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: await loadMessages(locale)
    },
  };
}