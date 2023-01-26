import "../styles/globals.css";
import "../styles/tailwind.css";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  const darkOn = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "dark" : ""} >
      <div className="dark:bg-gray-900 transition-colors duration-300 ease-in">
        <NavBar darkOn={darkOn} />
        <Component {...pageProps} />
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default MyApp;