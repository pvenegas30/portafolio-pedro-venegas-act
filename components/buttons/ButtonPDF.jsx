import React from "react";
import { useTranslations } from "next-intl";

const ButtonPDF = () => {
  const onButtonClick = () => {
    fetch("cv-developer.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "cv-developer.pdf";
        alink.click();
      });
    });
  };

  const t = useTranslations();
  return (
    <>
      <button
        onClick={onButtonClick}
        className='cursor-pointer my-10 bg-teal-600 text-white font-semibold tracking-wide p-3 rounded-3xl text-sm md:text-md	 md:px-5 hover:bg-teal-700 active:bg-teal-800 dark:bg-teal-400 dark:text-black'
      >
        {t("download.cv")}
      </button>
    </>
  );
};

export default ButtonPDF;
