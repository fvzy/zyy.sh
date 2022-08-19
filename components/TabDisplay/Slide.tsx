import React from 'react';
import { SkillGroup } from "./TabDisplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SlideProps {
    skillGroups: SkillGroup[],
    active: boolean,
}

// TODO: Rewrite
const Slide = ({ skillGroups, active }: SlideProps) => {
    return(
    // NOTE: Padding and negative margin should match wrapper div side margins
    <div className={"absolute overflow-scroll flex -mx-7 px-7 space-x-6 no-scrollbar transition-opacity left-0 right-0 " + (active ? "z-10 opacity-100 " : "opacity-0 ")}>
        {skillGroups.map(({title, skills}, i) => (
            <div className="min-w-[220px] flex-shrink-0 max-w-[340px] inline-block" key={i}>
                <h2 className="font-mono font-medium text-sub-light dark:text-sub-dark pb-2">{ title }</h2>
                <ul className="font-mono font-medium text-sub-light dark:text-sub-dark pl-2.5 space-y-1">
                    {skills.map(([icon, text], j) => 
                        <li key={j} className="space-x-3">
                            <FontAwesomeIcon icon={icon} fixedWidth={true} />
                            <p className="inline">{text}</p>
                        </li>)
                    }
                </ul>
            </div>
        ))}
    </div>
    )
}

export default Slide;