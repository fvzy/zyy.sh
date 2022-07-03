import Landing from "../frames/Landing";
import Medium from "../frames/Medium";
import Projects from "../frames/Projects";
import Skills from "../frames/Skills";
import Contact from "../frames/Contact";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <Landing />
            <div className="space-y-32">
                <Skills />
                <Projects />
                <Medium />
                <Contact />
                <Footer />
            </div>
        </div>
    )
}

export default Home;