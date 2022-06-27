import Preface from "../components/Preface";
import DefText from "../components/DefText";
import HeadingTwo from "../components/HeadingTwo";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";

import portfolio from "../images/portfolio.jpg";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
	return (
		<div className="space-y-2">
			<Preface className="text-red-light">PROJECTS</Preface>
			<HeadingTwo>To Open Source, From Me.</HeadingTwo>
			<DefText>
				I've created numerous projects throughout my programming
				journey, and almost all of them are free and open sourced,
				available for everyone to modify and learn from. Check out some
				notable ones below!
			</DefText>
            <div className="space-y-5 py-3">
                <ProjectCard
                    image={portfolio}
                    imageAlt="Portfolio Card Photo"
                    title="Portfolio v3"
                    text="Version 3 of my personal portfolio website (this website!) 
                    open sourced and made available online. Built with Next.JS and 
                    styled with Tailwind CSS."
                />
                <ProjectCard
                    image={portfolio}
                    imageAlt="Portfolio Card Photo"
                    title="Portfolio v3"
                    text="Version 3 of my personal portfolio website (this website!) 
                    open sourced and made available online. Built with Next.JS and 
                    styled with Tailwind CSS."
                />
                <ProjectCard
                    image={portfolio}
                    imageAlt="Portfolio Card Photo"
                    title="Portfolio v3"
                    text="Version 3 of my personal portfolio website (this website!) 
                    open sourced and made available online. Built with Next.JS and 
                    styled with Tailwind CSS."
                />
            </div>
            <h3 className="inter-medium text-lg text-sub-light text-center">Want to see more? <br /> Check out my <span className="inter-semibold">GitHub!</span></h3>
            <div className="flex justify-center">
                <Button icon={faGithub} text="GitHub" src="https://github.com/kevinMEH" />
            </div>
		</div>
	);
};

export default Projects;
