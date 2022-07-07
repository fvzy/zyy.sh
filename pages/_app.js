import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import "@fontsource/inter/variable.css";
import "@fontsource/roboto-mono/variable.css";
import "@fontsource/work-sans/800.css";

import '../styles/globals.css'

import NavBar from "../components/NavBar.tsx"

function MyApp({ Component, pageProps }) {
  return (
    <div className="p-5">
        <NavBar />
        <Component {...pageProps} />
    </div>
  )
}

export default MyApp
