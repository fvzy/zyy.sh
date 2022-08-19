import Head from "next/head";

import Wrapper from "../components/Wrapper";
import Profile from "../frames/Profile";
import Banner from "../frames/Banner";
import Skills from "../frames/Skills";
import Projects from "../frames/Projects";
import Contact from "../frames/Contact";

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
            <div className="px-7 space-y-8">
                <Profile />
                <Skills />
                <Projects />
                <Contact />
            </div>
        </Wrapper>
        </>
    )
}

export default Home;