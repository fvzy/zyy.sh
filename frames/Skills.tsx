import { MutableRefObject, useRef } from "react";
import DefText from "../components/DefText";
import FrameWrapper from "../components/FrameWrapper";
import HeadingTwo from "../components/HeadingTwo";
import Preface from "../components/Preface";
import TabDisplay, { SlideBody } from "../components/TabDisplay/TabDisplay";

const Skills = () => {
    const slideBodiesRef: MutableRefObject<SlideBody[]> = useRef(
        [{ // TODO:
            tabTitle: "Web",
            title: "Web Development",
            body: [
                "As a web developer, I focus on creating simple, intuitive, and thoughtful websites that everyone can feel comfortable using.",
                "Simplicity and purpose had always been the key to my designs. I believe that every element on a page should serve a purpose, and I make sure that that purpose is conveyed clearly (and beautifully) to my users."],
            skillGroups: [{
                title: "Frontend:",
                skills: ["HTML, CSS, JavaScript", "React, including Next.JS", "Component Libraries", "Tailwind CSS"]
            }, {
                title: "Backend:",
                skills: ["NodeJS", "ExpressJS & Rest APIs", "MongoBD, MySQL, and more", "GraphQL (WIP)"]
            }]
        }, {
            tabTitle: "Software",
            title: "Software Development",
            body: [
                "I've been writing programs and creating software since the very beginning of my programming journey back in 2020, and I've continued to this very day.",
                "During these two years, I've worked on a variety of different projects, using different tools each time. I've created games with Java using game development frameworks, built chrome extensions with JavaScript using chrome's extension API, analyzed and processed data with Python and C, and so much more.",
                "Recently, I've taken an interest in the inner workings of compilers, and I'm currently writing a compiler for my own programming language using Rust."],
            skillGroups: [{
                title: "Languages:",
                skills: ["JavaScript", "Java", "Python", "Rust, C, C++, C# (WIP)"]
            }, {
                title: "Areas:",
                skills: ["Application Development", "Server-side Programming", "UI Development", "Data Processing", "... And a lot more."]
            }]
        }, {
            tabTitle: "Design",
            title: "Graphic & UI Design",
            body: [ // TODO:
                "Before my entry into the world of computer science, I was working as a designer. Since then, I've transitioned over to programming, but most of the knowledge and skills from that period had remained.", 
                "I have extensive knowledge in interface, graphic, and motion design, and I'm very familiar with design applications such as Photoshop, After Effects, and Figma, among others.",
                "At present, I use my skills mainly for UI and UX development, crafting beautiful and unique modern interfaces for my websites and applications."],
            skillGroups: [{
                title: "Applications:",
                skills: ["Figma", "Photoshop", "Illustrator", "After Effects"]
            }, {
                title: "Skills:",
                skills: ["UI/UX Design", "Graphic Design", "Animation", "Video Editing"]
            }]
        }]
    )

	return <FrameWrapper className="max-w-[720px]">
        <Preface className="text-peach-light dark:text-peach-dark">KEY SKILLS</Preface>
        <HeadingTwo>Areas of Specialization</HeadingTwo>
        <DefText className="pb-2">
            I've worked with an assortment of different languages and
            frameworks throughout my developer journey, and I'm constantly
            learning more. Here's a small breakdown of the key areas
            that I specialize in, the skills I have, and the tools I use.
        </DefText>
        <TabDisplay slideBodies={slideBodiesRef.current} />
    </FrameWrapper>
};

export default Skills;
