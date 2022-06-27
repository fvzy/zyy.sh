import React, { useState } from "react";
import { useMemo } from "react";
import Slide from "./Slide";
import Tab from "./Tab";

export interface SlideBody {
    tabTitle: string,
    title: string,
    body: string[],
    skillGroups: SkillGroup[]
}

export interface SkillGroup {
    title: string,
    skills: string[]
}

// TODO: Accessibility: Left Right Arrow Keys, 
const TabDisplay = ({ slideBodies }: { slideBodies: SlideBody[] }) => {
    const [active, setActive] = useState(0);
    const slides: JSX.Element[] = useMemo(() => {
        console.log("Recalc Slide Body");
        let slides = [];
        for(let {title, body, skillGroups} of slideBodies) {
            slides.push(
                <Slide title={title} body={body} skillGroups={skillGroups} />
            );
        }
        return slides;
    }, [slideBodies])

    const tabs: JSX.Element[] = [];
    for(let [i, {tabTitle}] of slideBodies.entries()) {
        tabs.push(<Tab active={ i === active } setActiveFunction={i === active ? () => {} : () => setActive(i)} key={i}>
            {tabTitle}
        </Tab>);
    }
    
    return(
    <div className="space-y-4 py-2">
        <div className="flex overflow-scroll -mx-6 px-6 no-scrollbar">{ tabs }</div>
        { slides[active] }
    </div>
    )
}

export default TabDisplay;