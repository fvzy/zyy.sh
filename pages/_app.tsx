import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import "@fontsource/inter/variable.css";
import "@fontsource/fira-code/variable.css";

import "../styles/globals.css";

// TODO: Rewrite
function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
