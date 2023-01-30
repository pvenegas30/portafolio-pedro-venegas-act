import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const ProjectItem = ({ title, backgroundImg, tech, projectUrl }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 dark:shadow-gray-900 rounded-xl group hover:bg-gradient-to-r from-[#007a59] to-[#017f7b] transition-all duration-300 ease-in cursor-pointer '>
      <Link href={projectUrl}>
        <Image
          className='rounded-xl group-hover:opacity-25 object-contain hover:blur-sm'
          src={backgroundImg}
          alt='/'
        />
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h3 className='text-3xl text-white tracking-wider text-center'>
            {title}
          </h3>
          <p className='font-bold pb-4 pt-2 text-white text-center'>{tech}</p>

          <p className='text-center py-3 max-[30px] rounded-lg  text-white font-bold text-lg '>
            {t("more.information")}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectItem;
