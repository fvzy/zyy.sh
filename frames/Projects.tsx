import Preface from "../components/Preface";
import DefText from "../components/DefText";
import HeadingTwo from "../components/HeadingTwo";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";

import portfolio from "../images/portfolio.jpg";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
	return (
		<div className="space-y-1">
			<Preface className="text-red-light dark:text-red-dark">FEATURED PROJECTS</Preface>
			<HeadingTwo>To Open Source, From Me.</HeadingTwo>
			<DefText>
				I've created numerous projects throughout my programming
				journey with most of them being free and open sourced.
				Check out some notable ones below!
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
			<h3 className="inter-medium text-lg text-sub-light dark:text-sub-dark leading-snug text-center pt-1 pb-2">
				Want to see more? <br /> Check out my <span className="mono-bold text-main-light dark:text-main-dark">GitHub!</span>
			</h3>
			<div className="flex justify-center">
				<Button
					icon={faGithub}
					text="GitHub"
					src="https://github.com/kevinMEH"
				/>
			</div>
		</div>
	);
};

export default Projects;
