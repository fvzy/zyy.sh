import Head from "next/head";

import Wrapper from "../components/Wrapper";
import Profile from "../frames/Profile";
import Banner from "../frames/Banner";
import Skills from "../frames/Skills";
import Projects from "../frames/Projects";
import Contact from "../frames/Contact";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
        <Head>
            <title>kevinMEH | Portfolio</title>
            <meta name="description" content="Portfolio of Software Engineer Kevin Liao" />
            <meta name="theme-color" media="(prefers-color-scheme: light)" content="#FFFFFF" />
            <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#131825" />
        </Head>
            <Wrapper>
                <Banner />
                <div className="px-7 md:px-9 space-y-8 md:space-y-11 pb-36 md:pb-44">
                    <Profile />
                    <Skills />
                    <Projects />
                    <Contact />
                </div>
                <Footer />
            </Wrapper>
            <div className="relative">
                <div className="bottom-gradient opacity-5 md:opacity-10 dark:opacity-10" />
            </div>
        </>
    )
}

export default Home;