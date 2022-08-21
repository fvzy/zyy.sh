import Head from "next/head";

import Wrapper from "../components/Wrapper";
import Profile from "../frames/Profile";
import Banner from "../frames/Banner";
import Skills from "../frames/Skills";
import Projects from "../frames/Projects";
import Contact from "../frames/Contact";
import Footer from "../components/Footer";

// TODO: Rewrite
const Home = () => {
    return (
        <>
        <Head>
            <title>kevinMEH | Portfolio</title>
            <meta name="description" content="The official portfolio of web developer and software engineer kevinMEH (Kevin Liao)" />
        </Head>
        <Wrapper>
            <Banner />
            <div className="px-7 md:px-9 space-y-8 md:space-y-11 pb-20 md:pb-28">
                <Profile />
                <Skills />
                <Projects />
                <Contact />
            </div>
            <Footer />
        </Wrapper>
        </>
    )
}

export default Home;