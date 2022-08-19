import TabDisplay from "../components/TabDisplay/TabDisplay";

import { faBook as library, faBox as framework, faCube as language, faFloppyDisk as application } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
    return (
    <div>
        <h1 className="font-mono font-bold text-sub-light text-lg">Key Skills</h1>
        <TabDisplay sections={[{
            tabTitle: "Software",
            skillGroups: [{
                title: "Languages:",
                skills: [
                    [language, "Java"],
                    [language, "JavaScript, TypeScript"],
                    [language, "Python"],
                    [language, "C & C++"],
                    [language, "Rust"],
                ]
            }, {
                title: "Areas:",
                skills: [
                    [library, "Software Development"],
                    [library, "Server-side Programming"],
                    [library, "UI Development"],
                    [library, "Data Processing and IT"],
                    [library, "+ A lot more."]
                ]
            }]
        }, {
            tabTitle: "Web",
            skillGroups: [{
                title: "Frontend:",
                skills: [
                    [language, "HTML, CSS, JavaScript"],
                    [language, "TypeScript"],
                    [framework, "React, including Next.JS"],
                    [library, "Tailwind CSS"],
                ]
            }, {
                title: "Backend:",
                skills: [
                    [language, "NodeJS"],
                    [library, "ExpressJS"],
                    [application, "MongoDB, MySQL, etc."],
                ]
            }]
        }, {
            tabTitle: "Design",
            skillGroups: [{
                title: "Applications:",
                skills: [
                    [application, "Figma"],
                    [application, "PhotoShop"],
                    [application, "Premiere Pro"],
                    [application, "After Effects"],
                ]
            }, {
                title: "Areas:",
                skills: [
                    [library, "UI/UX Design"],
                    [library, "Graphic Design"],
                    [library, "Motion Design"],
                    [library, "Video Editing"],
                ]
            }]
        }]} />
    </div>
    )
}

export default Skills;