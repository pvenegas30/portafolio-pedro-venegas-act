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
      <NavBar darkOn={darkOn} />
      <Component {...pageProps} />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MyApp;