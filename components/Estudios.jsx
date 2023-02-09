import React from "react";
import Image from "next/image";
import cert01 from "../public/cert-studies/certificado-udemy-01.jpg";
import cert02 from "../public/cert-studies/certificado-udemy-02.jpg";
import { useTranslations } from "next-intl";

export const Estudios = () => {
  const t = useTranslations();
  return (
    <div className='w-full h-full px-10 pb-64 lg:px-[140px] container m-auto'>
      <div>
        <h2 className=' text-center text-3xl py-10 dark:text-white'>
          {t("studies.title")}
        </h2>
      </div>

      <div className='flex flex-col gap-y-10 gap-x-10 md:flex-row md:justify-between md:items-center'>
        <a
          href='https://www.udemy.com/course/master-en-javascript-aprender-js-jquery-angular-nodejs-y-mas/'
          title='Detalles de curso Udemy'
          target='_blank'
          rel='noreferrer'
          className='md:w-[400px] md:h-[150px] lg:w-[450px] lg:h-[200px]'
        >
          <Image
            data-aos='fade-right'
            src={cert01}
            alt='cert01'
            className='rounded-lg object-cover ease-in duration-100 shadow-[0px_3px_6px_3px_#00000024] hover:shadow-[0px_3px_8px_6px_#00000024]'
          />
        </a>
        <a
          href='https://www.udemy.com/course/master-en-react-aprender-reactjs-hooks-mern-nodejs-jwt/'
          title='Detalles de curso Udemy'
          target='_blank'
          rel='noreferrer'
          className='md:w-[400px] md:h-[150px] lg:w-[450px] lg:h-[200px]'
        >
          <Image
            data-aos='fade-left'
            src={cert02}
            alt='cert02'
            className='rounded-lg object-cover ease-in duration-200 shadow-[0px_3px_6px_3px_#00000024] hover:shadow-[0px_3px_8px_6px_#00000024]'
          />
        </a>
      </div>
    </div>
  );
};
