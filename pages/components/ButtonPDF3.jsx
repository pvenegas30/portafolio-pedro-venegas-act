import React from "react";

const ButtonPDF3 = () => {
  const onButtonClick = () => {
    fetch("cv-arq.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "cv-arq.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <button
        onClick={onButtonClick}
        className='cursor-pointer my-10 bg-teal-600 text-white font-semibold tracking-wide p-3 rounded-3xl text-sm md:text-md	 md:px-5 hover:bg-teal-700 active:bg-teal-800 dark:bg-teal-400 dark:text-black'
      >
        Descargar CV
      </button>
    </>
  );
};

export default ButtonPDF3;
