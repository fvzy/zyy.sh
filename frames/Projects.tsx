import ProjectCard from "../components/ProjectCard";

import portfolioIcon from "../images/portfolio-icon.jpg";

const Projects = () => {
    return(
    <div className="space-y-3">
        <h1 className="font-mono font-bold text-sub-light text-lg">Recent Projects</h1>
        <div className="space-y-4">
            <ProjectCard href="https://github.com/kevinMEH/portfolio" image={portfolioIcon} imageAlt="Portfolio Icon" title="Portfolio v4" 
            text="Version 4 of my personal portfolio (this website!) made with React and NextJS, styled with Tailwind CSS." />
            <ProjectCard href="https://github.com/kevinMEH/portfolio" image={portfolioIcon} imageAlt="Portfolio Icon" title="Portfolio v4" 
            text="Version 4 of my personal portfolio (this website!) made with React and NextJS, styled with Tailwind CSS." />
            <ProjectCard href="https://github.com/kevinMEH/portfolio" image={portfolioIcon} imageAlt="Portfolio Icon" title="Portfolio v4" 
            text="Version 4 of my personal portfolio (this website!) made with React and NextJS, styled with Tailwind CSS." />
        </div>
    </div>
    )
}

export default Projects;