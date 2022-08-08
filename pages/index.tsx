import Landing from "../frames/Landing";
import Medium from "../frames/Medium";
import Projects from "../frames/Projects";
import Skills from "../frames/Skills";
import Contact from "../frames/Contact";
import Footer from "../components/Footer";
import Head from "next/head";

const Home = () => {
    return (
        <>
        <Head>
            <title>kevinMEH | Portfolio</title>
            <meta name="description" content="The official portfolio of web developer and software engineer kevinMEH (Kevin Liao)" />
        </Head>
        <div>
            <Landing />
            <div className="space-y-32 md:space-y-48">
                <Skills />
                <Projects />
                <Medium />
                <Contact />
                <Footer />
            </div>
        </div>
        </>
    )
}

export default Home;