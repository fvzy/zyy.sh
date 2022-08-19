import React, { useState } from "react";
import Slide from "./Slide";
import Tab from "./Tab";

import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface Section {
    tabTitle: string,
    skillGroups: SkillGroup[]
}

export interface SkillGroup {
    title: string,
    skills: [IconDefinition, string][]
}

// TODO: Accessibility: Left Right Arrow Keys, 
// TODO: Rewrite styling.
// TODO: Add animations.
const TabDisplay = ({ sections }: { sections: Section[] }) => {
    const [active, setActive] = useState(0);
    
    const tabs: JSX.Element[] = [];
    const slides: JSX.Element[] = [];
    let hiddenSlide: JSX.Element;
    for(let [i, {tabTitle, skillGroups}] of sections.entries()) {
        tabs.push(<Tab active={ i === active } setActiveFunction={i === active ? () => {} : () => setActive(i)} key={i}>
            {tabTitle}
        </Tab>);
        slides.push(
            <Slide key={i} skillGroups={skillGroups} active={ i === active } />
        );
        if(i === active) {
            hiddenSlide = <Slide skillGroups={skillGroups} active={true} backdrop={true} />
        }
    }

    return(
    <div className="space-y-4 py-2">
        <div className="flex overflow-scroll -mx-5 px-5 no-scrollbar md:mx-0 md:px-0">
            { tabs }
        </div>
        <div className="relative">
            { slides }
            { hiddenSlide }
        </div>
    </div>
    )
}

export default TabDisplay;