import "../styles/globals.css";
import "../styles/tailwind.css";
import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Component {...pageProps} />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MyApp;