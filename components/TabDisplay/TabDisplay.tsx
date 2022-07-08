import React, { useState } from "react";
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
    
    const tabs: JSX.Element[] = [];
    const slides: JSX.Element[] = [];
    let hiddenSlide: JSX.Element;
    for(let [i, {tabTitle, title, body, skillGroups}] of slideBodies.entries()) {
        tabs.push(<Tab active={ i === active } setActiveFunction={i === active ? () => {} : () => setActive(i)} key={i}>
            {tabTitle}
        </Tab>);
        slides.push(
            <Slide title={title} body={body} key={i}
            skillGroups={skillGroups} active={ i === active } />
        );
        if(i === active) {
            hiddenSlide = <Slide title={title} body={body} skillGroups={skillGroups} active={true} backdrop={true} />
        }
    }

    return(
    <div className="space-y-4 py-2">
        <div className="flex overflow-scroll -mx-5 px-5 no-scrollbar">{ tabs }</div>
        <div className="relative">
            { slides.map(slide => slide)}
            { hiddenSlide }
        </div>
    </div>
    )
}

export default TabDisplay;