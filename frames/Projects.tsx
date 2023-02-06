import ProjectCard from "../components/ProjectCard";
import React, { useEffect, useState } from "react"
import portfolioIcon from "../images/portfolio-icon.jpg";


const Projects = () => {
    const [repos, setRepos] = useState([])

    const fetchData = () => {
      fetch("https://api.github.com/users/wffzy/repos")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setRepos(data)
        })
    }
  
    useEffect(() => {
      fetchData()
    }, [])

    return(
    <div className="space-y-3">
        <h1 className="font-mono font-bold text-sub-light dark:text-sub-dark text-lg">Recent Projects</h1>
        {repos.length > 0 && (
        <div className="space-y-4">
           {repos.map(repo => (
          <ProjectCard key={repo.id} href={repo.html_url} image={portfolioIcon} imageAlt={repo.full_name} title={repo.name} text={repo.description} lang={repo.language} />
          ))}
           </div>
           )}
    </div>
    )
}

export default Projects;