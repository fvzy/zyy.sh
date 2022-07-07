import Document, { Html, Head, Main, NextScript } from "next/document";

class Portfolio extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <script dangerouslySetInnerHTML={{__html: `
        (function() {
            function setTheme(theme) {
                if(theme === "dark") document.documentElement.classList.add("dark");
                else document.documentElement.classList.remove("dark");
            }

            let preferredTheme = localStorage.getItem("theme");
            let systemDarkQuery = window.matchMedia("(prefers-color-scheme: dark)");
            
            function systemQueryHandler(event) {
                if(localStorage.getItem("theme") === null)
                    setTheme(event.matches ? "dark" : "light");
            }
            
            if(preferredTheme === null) {
                systemQueryHandler(systemDarkQuery);
                systemDarkQuery.addEventListener("change", systemQueryHandler);
            } else {
                setTheme(preferredTheme);
            }
        })();
                    `}} />
                </Head>
                <body className="bg-white dark:bg-dark duration-300">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default Portfolio;