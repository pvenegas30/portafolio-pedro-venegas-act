import React from "react";
import Image from "next/image";
import web1 from "../../public/Projects/web1.png";
import web2 from "../../public/Projects/web2.png";
import web3 from "../../public/Projects/web3.png";
import web4 from "../../public/Projects/web4.png";
import web5 from "../../public/Projects/web5.png";
import web6 from "../../public/Projects/web6.png";

export const Portafolio = () => {
  return (
    <div>
      <section className='py-10 md:px-20'>
        <div>
          <h3 className=' text-center text-3xl py-1 dark:text-white '>
            Mis Proyectos
          </h3>
        </div>
        <div className='flex flex-col gap-10 p-10 md:gap-20 lg:flex-row lg:flex-wrap'>
          <div className='basis-1/3 flex-1 '>
            <Image
              className='rounded-lg object-cover w-full h-52 md:h-60'
              src={web1}
              alt='web'
            />
          </div>
          <div className='basis-1/3 flex-1'>
            <Image
              className='rounded-lg object-cover w-full h-52 md:h-60'
              src={web2}
              alt='web'
            />
          </div>
          <div className='basis-1/3 flex-1'>
            <Image
              className='rounded-lg object-cover w-full h-52 md:h-60'
              src={web3}
              alt='web'
            />
          </div>
          <div className='basis-1/3 flex-1'>
            <Image
              className='rounded-lg object-cover w-full h-52 md:h-60'
              src={web4}
              alt='web'
            />
          </div>
          <div className='basis-1/3 flex-1'>
            <Image
              className='rounded-lg object-cover w-full h-52 md:h-60'
              src={web5}
              alt='web'
            />
          </div>
          <div className='basis-1/3 flex-1'>
            <Image
              className='rounded-lg object-cover w-full h-52 md:h-60'
              src={web6}
              alt='web'
            />
          </div>
        </div>
      </section>
    </div>
  );
};
