import React, { useState } from 'react';
import { useTranslations } from "next-intl";
import { loadMessages } from "@/helpers/loadMessages";
import Image from "next/image";
import Vzla from "../public/vzla.png";
import Usa from "../public/usa.png";
import Link from 'next/link';
import { useRouter } from 'next/router';


function Idioma() {

  const t = useTranslations();

  const asPath = useRouter();
  return (
    <div className="flex flex-row gap-x-2 ">


      <Link href={asPath} url={asPath} locale="en" className='p-1 bg-teal-600 rounded-full text-white'>
        <Image
          width={28}
          height={28}
          src={Usa}
          alt='usa'
          title='English'
        />
      </Link>
      <Link href={asPath} url={asPath} locale="es" className='p-1 bg-teal-600 rounded-full text-white'>
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