import React from "react";
import novarq from "../../public/projects/nova.png";
import chatrealtime from "../../public/projects/chatapp.png";
import forecastapp from "../../public/projects/weatherapp.png";
import movies from "../../public/projects/moviestime.png";
import ProjectItem from "./ProjectItem";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t, i18n } = useTranslation();
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          {t("my.projects")}
        </p>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Nova Architechture'
            backgroundImg={novarq}
            projectUrl='/nova'
            tech='React JS'
          />
          <ProjectItem
            title='RealTime Private Chat App'
            backgroundImg={chatrealtime}
            projectUrl='/chatapp'
            tech='React JS'
          />
          <ProjectItem
            title='Weather App Forecast'
            backgroundImg={forecastapp}
            projectUrl='/weatherapp'
            tech='React JS'
          />
          <ProjectItem
            title='MoviesTime'
            backgroundImg={movies}
            projectUrl='/moviestime'
            tech='Next JS'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
