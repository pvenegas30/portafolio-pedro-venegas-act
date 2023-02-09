import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useTranslations } from "next-intl";
import Aos from "aos";
import "aos/dist/aos.css";

const ProjectItem = ({ title, backgroundImg, tech, projectUrl }) => {
  const t = useTranslations();

  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      duration: 800,
    });
  }, []);
  return (
    <div>
      <div className='hidden md:block'>
        <div
          data-aos='fade-right'
          className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 dark:shadow-gray-900 rounded-xl group hover:bg-gradient-to-r from-[#007a59] to-[#017f7b] transition-all duration-300 ease-in cursor-pointer '
        >
          <Link href={projectUrl}>
            <Image
              className='rounded-xl group-hover:opacity-25 object-contain hover:blur-sm'
              src={backgroundImg}
              alt='img'
            />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
              <h3 className='md:text-3xl  font-bold text-2xl text-white tracking-wider text-center'>
                {title}
              </h3>
              <p className='font-bold pb-4 pt-2 text-white text-center'>
                {tech}
              </p>

              <p className='text-center py-3 max-[30px] rounded-lg  text-white font-bold text-lg '>
                {t("more.information")}
              </p>
            </div>
          </Link>
        </div>
      </div>
      {/* MOBILE */}
      <div className='block md:hidden px-5' data-aos='fade-right'>
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 dark:shadow-gray-900 rounded-xl bg-black'>
          <Link href={projectUrl}>
            <Image
              className='rounded-xl opacity-25 bg-black object-contain'
              src={backgroundImg}
              alt='img'
            />

            <div className='w-[80%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
              <h3 className='text-lg pt-5 text-teal-300 tracking-widest font-bold text-center '>
                {title}
              </h3>
              <p className='font-bold py-2 text-white text-center text-sm'>
                {tech}
              </p>

              <p className='text-center max-[30px] rounded-lg  text-white font-bold text-base '>
                {t("more.information")}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
