import React from 'react';
import { SkillGroup } from "./TabDisplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SlideProps {
    skillGroups: SkillGroup[],
    active: boolean,
    backdrop?: boolean
}

// TODO: Rewrite
const Slide = ({ skillGroups, active, backdrop = false }: SlideProps) => {
    return(
    <div className={"flex overflow-scroll no-scrollbar -mx-5 px-5 space-y-2 transition-opacity ease-in-out w-full " + (active ? "z-10 opacity-100 " : "opacity-0 ") + (backdrop ? "invisible" : "absolute")}>
        {skillGroups.map(({title, skills}, i) => (
            <div className="min-w-[280px] w-full max-w-[340px] inline-block" key={i}>
                <h4 className="font-mono font-medium text-sub-light dark:text-sub-dark pb-1">{ title }</h4>
                <ul className="font-mono font-medium text-sub-light dark:text-sub-dark pl-6">
                    {skills.map(([icon, text], j) => 
                        <li key={j}>
                            <FontAwesomeIcon icon={icon} fixedWidth={true} />
                            <p className="inline">{text}</p>
                        </li>)
                    }
                </ul>
            </div>
        ))}
    </div>)
}

export default Slide;