import React, { useEffect } from 'react';
import { SkillGroup } from "./TabDisplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SlideProps {
    skillGroups: SkillGroup[],
    active: boolean,
}

const Slide = ({ skillGroups, active }: SlideProps) => {

    useEffect(() => {
        // Only one element will be active at a time, just for
        // performance to ensure that this only runs once.
        if(active) {
            setTimeout(() => {
                let elements = document.getElementsByClassName("fade");
                for(let element of elements) {
                    element.classList.add("invisible");
                }
            }, 156); // Transition lasts 150ms
        }
    });

    return(
    // NOTE: Padding and negative margin should match wrapper div side margins
    <div className={"absolute overflow-scroll flex justify-between -mx-7 px-7 space-x-6 no-scrollbar transition-opacity left-0 right-0 " + (active ? "z-10 opacity-100 " : "fade opacity-0 ")}>
        {skillGroups.map(({title, skills}, i) => (
        <div className="min-w-[260px] flex-shrink-0 inline-block flex-1 px-[18px] pt-3 pb-4 border border-off-white dark:border-off-black rounded-md md:hover:bg-off-white md:dark:hover:bg-off-black !bg-opacity-25 transition-all" key={i}>
            <h2 className="font-mono font-semibold text-sub-light dark:text-sub-dark pb-2 md:pb-3">{ title }</h2>
            <ul className="font-mono text-sub-light dark:text-sub-dark pl-2.5 md:pl-3.5 space-y-1 md:space-y-2">
                {skills.map(([icon, text], j) => 
                <li key={j} className="flex items-center space-x-3 md:space-x-4 text-sm">
                    <FontAwesomeIcon icon={icon} fixedWidth={true} className="text-base pb-[2px]" />
                    <p className="inline font-[475]">{text}</p>
                </li>)
                }
            </ul>
        </div>
        ))}
        <div className="!m-0"></div>
    </div>
    )
}

export default Slide;