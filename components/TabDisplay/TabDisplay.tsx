import React, { useCallback, useState, useEffect } from "react";
import Slide from "./Slide";
import Tab from "./Tab";
import TranslatingTabGroup from "./TranslatingTabGroup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

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
// TODO: Add animations.
const TabDisplay = ({ sections }: { sections: Section[] }) => {
    const [active, setActive] = useState(0);
    const [direction, setDirection] = useState("");
    const handleArrowKeys = useCallback((event: globalThis.KeyboardEvent | { key: string }) => {
        if(event.key === "ArrowLeft") {
            setDirection("left");
            setActive(prev => (prev - 1 + 3) % 3);
        } else if(event.key === "ArrowRight") {
            setDirection("right");
            setActive(prev => (prev + 1) % 3);
        } 
    }, [])
    
    const tabs: JSX.Element[] = [];
    const tabsButActive: JSX.Element[] = [];
    const slides: JSX.Element[] = [];
    for(let [i, {tabTitle, skillGroups}] of sections.entries()) {
        tabs.push(<Tab active={ i === active } setActiveFunction={i === active ? () => {} : () => setActive(i)} key={i}>
            {tabTitle}
        </Tab>);
        slides.push(<Slide key={i} skillGroups={skillGroups} active={active === i} />)
    }
    
    for(let i = 0; i < 5; i++) {
        let current = (active - 2 + i + 3) % 3;
        let { tabTitle } = sections[current];
        tabsButActive.push(<Tab active={ true } setActiveFunction={() => {}} key={"a" + i}>
            {tabTitle}
        </Tab>);
    }
    
    function focusHandler() {
        document.addEventListener("keydown", handleArrowKeys);
    }
    
    function blurHandler() {
        document.removeEventListener("keydown", handleArrowKeys);
    }

    return(
    // NOTE: Padding and negative margin should match wrapper div side margins
    <div tabIndex={-1} className="space-y-3 py-3 outline-none" onFocus={focusHandler} onBlur={blurHandler}>
        <div className="flex space-x-4 justify-center sm:hidden">
            <button className="rounded-full h-10 w-10 text-quiet-light dark:text-quiet-dark" onClick={() => handleArrowKeys({ key: "ArrowLeft" })}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <TranslatingTabGroup tabsButActive={tabsButActive} direction={direction} />
            <button className="rounded-full h-10 w-10 text-quiet-light dark:text-quiet-dark" onClick={() => handleArrowKeys({ key: "ArrowRight" })}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
        <div className="hidden sm:flex overflow-scroll -mx-7 px-7 space-x-2 no-scrollbar">
            { tabs }
        </div>
        <div className="relative no-scrollbar h-[200px]">
            { slides }
        </div>
    </div>
    )
}

export default TabDisplay;