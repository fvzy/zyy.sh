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
        <div className="flex overflow-scroll -mx-5 px-5 no-scrollbar md:mx-0 md:px-0">
            { tabs }
            <div className="inline-block h-10 w-full border-b-4 
            [border-image:linear-gradient(to_right,rgb(237,237,240),rgba(237,237,240,0))]
            dark:[border-image:linear-gradient(to_right,rgb(36,36,36),rgba(36,36,36,0))]
            ![border-image-slice:1]" />
        </div>
        <div className="relative">
            { slides }
            { hiddenSlide }
        </div>
    </div>
    )
}

export default TabDisplay;