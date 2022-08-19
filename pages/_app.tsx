import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import "@fontsource/inter/variable.css";
import "@fontsource/inconsolata/200.css";
import "@fontsource/inconsolata/300.css";
import "@fontsource/inconsolata/400.css";
import "@fontsource/inconsolata/500.css";
import "@fontsource/inconsolata/600.css";
import "@fontsource/inconsolata/700.css";
import "@fontsource/inconsolata/800.css";
import "@fontsource/inconsolata/900.css";

import "../styles/globals.css";

// TODO: Rewrite
function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
