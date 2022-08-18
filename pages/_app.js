import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import "@fontsource/inter/variable.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import "@fontsource/ibm-plex-mono/700.css";

import '../styles/globals.css'

import NavBar from "../components/NavBar.tsx"

// TODO: Rewrite
function MyApp({ Component, pageProps }) {
  return (
    <div className="py-5">
        <NavBar />
        <Component {...pageProps} />
    </div>
  )
}

export default MyApp
