import "../styles/globals.css";
import "../styles/tailwind.css";
import { useState } from "react";
import NavBar from './../components/NavBar';
import { Footer } from './../components/Footer';
import { NextIntlProvider } from 'next-intl';

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  const darkOn = () => {
    setDarkMode(!darkMode);
  };
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <div className={darkMode ? "dark" : ""} >
        <div className="dark:bg-gray-900 transition-colors duration-300 ease-in">

          <NavBar darkOn={darkOn}>

          </NavBar>
          <Component {...pageProps} />

          <Footer />
        </div>
      </div>
    </NextIntlProvider>
  );
}

export default MyApp;